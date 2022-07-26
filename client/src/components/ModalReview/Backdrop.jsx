import React from "react";
import { motion } from "framer-motion";
import { DIV } from "./style";
import { useEffect } from "react";

function Backdrop({ children, onCLick }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.minHeight = "100vh";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <DIV
      as={motion.div}
      onClick={onCLick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </DIV>
  );
}

export default Backdrop;
