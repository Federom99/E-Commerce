import { AnimatePresence } from "framer-motion";
import React from "react";

function ModalContainer({ children, label }) {
  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      //   onExitComplete={() => framerLogger(label)}
    >
      {children}
    </AnimatePresence>
  );
}

export default ModalContainer;
