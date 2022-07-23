import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductReviews } from "../../redux/actions/reviews";
import Backdrop from "./Backdrop";
import { BTN, BtnRese, Img, Modale } from "./style";

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

const Modal = ({ handleClose, text }) => {
  const { id, imagen } = useSelector((state) => state.reviews.review);
  const [loading, setLoading] = useState(true);
  const [recentReview, setRecentReview] = useState([]);
  const [rta, setRta] = useState("Ok");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductReviews(id)).then((res) => {
        setLoading(false);
        console.log(res);
        if (res.payload.length === 0) {
          setRta("Actualmente no hay Reseñas...");
        }
      });
    }
  }, []);
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
        <h2>{text}</h2>
        <Img src={imagen} alt={`imagen-${id}`} />
        <BTN onClick={handleClose}>Close</BTN>
        <p>{rta}</p>
        <BtnRese>Crear Reseña</BtnRese>
      </Modale>
    </Backdrop>
  );
};

export default Modal;
