import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { Modale } from "./style";

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
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </Modale>
    </Backdrop>
  );
};

export default Modal;
