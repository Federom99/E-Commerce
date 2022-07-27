import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalClose,
  getProductReviews,
  postReviews,
} from "../../redux/actions/reviews";
import Loading from "../Loader";
import Backdrop from "./Backdrop";
import { useOnClickOutside } from "./clickOutside";
import {
  BTN,
  BtnRese,
  DivRese,
  ErrorsText,
  Img,
  Input,
  Modale,
  Review,
  Stars,
} from "./style";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const variants = {
  show: { opacity: 1, transition: { duration: 0.3 } },
  stop: { opacity: 0, transition: { duration: 0.3 } },
};

const stars = Array(5).fill(0);
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const miniStyleInternal = {
  margin: "15px 0",
};
const Modal = ({ handleClose, text }) => {
  const { id, imagen, nombre, userId } = useSelector(
    (state) => state.reviews.review
  );
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [textLoading, setTextLoading] = useState("");
  const [hoverValue, setHoverValue] = useState(undefined);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({ puntaje: 0 });
  const [resenas, setResenas] = useState([]);
  const [ver, setVer] = useState(false);
  const [rta, setRta] = useState("");
  const ref = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductReviews(id)).then((res) => {
      setLoading(false);
      if (res.payload.length === 0) {
        setRta("Actualmente no hay Reseñas...");
      } else if (res.payload.length > 0) {
        setResenas(res.payload);
      }
    });

    if (textLoading === "Reseña Creada") {
      setLoading(true);
      dispatch(getProductReviews(id)).then((res) => {
        if (res.payload.length === 0) {
          setRta("Actualmente no hay Reseñas...");
        } else {
          setRta(null);
          setTextLoading(null);
          setResenas(res.payload.data);
        }
      });
    }

    setState({ ...state, usuarioId: userId });
  }, [id, textLoading]);

  const handleClickVer = () => {
    setVer(!ver);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleClick = (value) => {
    setState({ ...state, puntaje: value });
    setErrors({});
  };

  const handleSubmitI = () => {
    const validaciones = {
      titulo: {
        required: {
          value: true,
          message: "Campo Requerido",
        },
      },
      comentario: {
        required: {
          value: true,
          message: "Campo Requerido",
        },
      },
      puntaje: {
        custom: {
          isValid: (value) => value <= 5 && value > 0,
          message: "El puntaje debe ser un valor mayor a 0",
        },
      },
    };

    if (validaciones) {
      let valid = true;
      const newErrors = {};
      for (const key in validaciones) {
        // console.log(key);
        const value = state[key];
        const validacion = validaciones[key];
        if (validacion?.required?.value && !value) {
          valid = false;
          newErrors[key] = validacion.required.message;
        }

        const custom = validacion?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }

      setLoadingCreate(true);

      dispatch(postReviews(id, state)).then((res) => {
        if (res.payload.response?.data?.Error) {
          setLoadingCreate(false);
          setErrors({ ...errors, postReview: res.payload.response.data.Error });
        } else {
          setLoadingCreate(false);
          setTextLoading("Reseña Creada");
        }
      });
    }
  };

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useOnClickOutside(ref, () => dispatch(changeModalClose()));
  return (
    <Backdrop onClick={handleClose}>
      <Modale
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={ref}
      >
        <BTN onClick={handleClose}>
          <AiFillCloseCircle fontSize={30} style={{cursor:"pointer"}}/>
        </BTN>
        <h4>{nombre}</h4>

        <Img src={imagen} alt={`imagen-${id}`} />
        <BtnRese onClick={handleClickVer}>
          {!ver ? "Crear Reseña" : "En otro momento..."}
        </BtnRese>
        {ver && (
          <>
            <Input
              name="titulo"
              placeholder="Titulo..."
              onChange={handleChange}
            />
            {errors.titulo && <ErrorsText>{errors.titulo}</ErrorsText>}
            <Review
              as={motion.textarea}
              variants={variants}
              animate={ver ? "show" : "notShow"}
              placeholder="Ingrese la reseña del producto"
              name="comentario"
              onChange={handleChange}
            ></Review>
            {errors.comentario && <ErrorsText>{errors.comentario}</ErrorsText>}
            <Stars>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={20}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={state.puntaje > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      marginTop: "1rem",
                      alignSelf: "flex-start",
                    }}
                  />
                );
              })}
            </Stars>
            {errors.puntaje && <ErrorsText>{errors.puntaje}</ErrorsText>}
            <BtnRese onClick={handleSubmitI}>Enviar Reseña</BtnRese>
            {errors.postReview && <ErrorsText>{errors.postReview}</ErrorsText>}
            {loadingCreate ? <Loading /> : <>{textLoading}</>}
          </>
        )}
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {resenas &&
              resenas.map((rese) => (
                <DivRese key={rese.id}>
                  <figcaption>
                    <blockquote>
                      <p>{rese.comentario}</p>
                    </blockquote>

                    <h3 style={{ padding: 0, margin: 0 }}>{rese.titulo}</h3>
                    <Stars>
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={5}
                            color={
                              rese.puntaje > index ? colors.orange : colors.grey
                            }
                            style={{
                              marginRight: 5,
                            }}
                          />
                        );
                      })}
                    </Stars>
                    {rese.usuario && <p>{rese.usuario.nombre}</p>}
                  </figcaption>
                </DivRese>
              ))}
            {rta !== "" && <div style={{ marginBottom: "1rem" }}>{rta}</div>}
          </>
        )}
      </Modale>
    </Backdrop>
  );
};

export default Modal;
