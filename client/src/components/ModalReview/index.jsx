import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductReviews, postReviews } from "../../redux/actions/reviews";
import Backdrop from "./Backdrop";
import {
  BTN,
  BtnRese,
  Button,
  ErrorsText,
  Img,
  Input,
  Modale,
  Review,
  Stars,
} from "./style";
import { FaStar } from "react-icons/fa";
import useFormEditProfile from "../../hooks/useFormEditProfile";
import Loading from "../Loader";
import { AiFillCloseCircle } from "react-icons/ai";

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
  const [ver, setVer] = useState(false);
  const [rta, setRta] = useState("Ok");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductReviews(id)).then((res) => {
      setLoading(false);
      if (res.payload.length === 0) {
        setRta("Actualmente no hay Reseñas...");
      }
    });

    if (textLoading === "Reseña Creada") {
      setLoading(true);
      dispatch(getProductReviews(id)).then((res) => {
        setLoading(false);
        console.log(res);
        console.log(res.payload.length);
        if (res.payload.length === 0) {
          setRta("Actualmente no hay Reseñas...");
        } else {
          setRta("Hay reseñas");
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
  };

  const handleSubmitI = () => {
    console.log("click");
    const validaciones = {
      titulo: {
        required: {
          value: true,
          message: "Campo Requerido",
        },
      },
      puntaje: {
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
    };

    if (validaciones) {
      let valid = true;
      const newErrors = {};
      for (const key in validaciones) {
        const value = state[key];
        const validacion = validaciones[key];
        if (validacion.required.value && !value) {
          valid = false;
          newErrors[key] = validacion.required.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }

      setLoadingCreate(true);

      dispatch(postReviews(id, state)).then((res) => {
        setLoadingCreate(false);
        setTextLoading("Reseña Creada");
      });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
      >
        <BTN onClick={handleClose}>
          <AiFillCloseCircle />
        </BTN>
        <h4 style={miniStyleInternal}>{nombre}</h4>
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
                    color={
                      (hoverValue || state.puntaje) > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </Stars>
            {errors.puntaje && <ErrorsText>{errors.puntaje}</ErrorsText>}
            <BtnRese onClick={handleSubmitI}>Enviar Reseña</BtnRese>
            {loadingCreate ? <Loading /> : <>{textLoading}</>}
          </>
        )}

        <p style={miniStyleInternal}>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>{rta}</>
          )}
        </p>
      </Modale>
    </Backdrop>
  );
};

export default Modal;
