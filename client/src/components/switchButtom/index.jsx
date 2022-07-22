import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DIVContainer, Handle, ICON } from "./style";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <DIVContainer
      className="container"
      dataDarkmode={isOn}
      onClick={() => setIsOn(!isOn)}
    >
      <Handle layout as={motion.div}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <ICON isOn={isOn}>{isOn ? <BsFillMoonStarsFill /> : <FaSun />}</ICON>
        </AnimatePresence>
      </Handle>
    </DIVContainer>
  );
};
