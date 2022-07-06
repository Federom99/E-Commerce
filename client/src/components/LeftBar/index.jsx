import React, { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { ContenedorLista, LeftBarContainer } from "./style";
import { GiArmoredPants, GiPirateCoat, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import style from "./styles.module.css";

function LeftBar() {
  const [entro, setEntro] = useState(false);
  let stylos;
  if (entro) {
    stylos = style.show;
  } else {
    stylos = style.notShow;
  }
  const entraste = () => {
    setEntro(true);
  };

  const saliste = () => {
    setEntro(false);
  };
  return (
    <LeftBarContainer onMouseEnter={entraste} onMouseLeave={saliste}>
      <ContenedorLista>
        <li className={style.lista}>
          <span>
            <FaTshirt />
          </span>
          <span className={stylos}>Remeras</span>
        </li>
        <li className={style.lista}>
          <span>
            <RiShirtFill />
          </span>
          <span className={stylos}>Camisas</span>
        </li>
        <li className={style.lista}>
          <span>
            <GiArmoredPants />
          </span>
          <span className={stylos}>Pantalones</span>
        </li>
        <li className={style.lista}>
          <span>
            <GiRunningShoe />
          </span>
          <span className={stylos}>Calzado</span>
        </li>
        <li className={style.lista}>
          <span>
            <GiPirateCoat />
          </span>
          <span className={stylos}>Abrigo</span>
        </li>
        <li className={style.lista}>
          <span>
            <BsSmartwatch />
          </span>
          <span className={stylos}>Accesorios</span>
        </li>
      </ContenedorLista>
    </LeftBarContainer>
  );
}

export default LeftBar;
