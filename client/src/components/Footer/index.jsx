import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Box, FContainer } from "./style";

function Footer() {
  const [expanded, setExpanded] = useState({
    face: false,
    instagram: false,
    whatsapp: false,
  });
  const In = (key) => {
    switch (key) {
      case "face":
        setExpanded({ ...expanded, face: true });
        break;
      case "insta":
        setExpanded({ ...expanded, instagram: true });
        break;
      case "what":
        setExpanded({ ...expanded, whatsapp: true });
      default:
        break;
    }
  };

  const Out = (key) => {
    switch (key) {
      case "face":
        setExpanded({ ...expanded, face: false });
        break;
      case "insta":
        setExpanded({ ...expanded, instagram: false });
        break;
      case "what":
        setExpanded({ ...expanded, whatsapp: false });
      default:
        break;
    }
  };
  return (
    <FContainer>
      <Box
        onMouseEnter={() => In("face")}
        onMouseLeave={() => Out("face")}
        expanded={expanded.face}
      >
        <FaFacebookF />
      </Box>
      <Box
        onMouseEnter={() => In("insta")}
        onMouseLeave={() => Out("insta")}
        expanded={expanded.instagram}
      >
        <AiFillInstagram />
      </Box>
      <Box
        onMouseEnter={() => In("what")}
        onMouseLeave={() => Out("what")}
        expanded={expanded.whatsapp}
      >
        <IoLogoWhatsapp />
      </Box>
    </FContainer>
  );
}

export default Footer;
