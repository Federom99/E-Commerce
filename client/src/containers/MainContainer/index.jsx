import React from "react";

import { Main } from "./styles";
import CardsContainer from "../CardsContainer";
import LeftBar from "../../components/LeftBar";
import Paginado from "../../components/Paginado/Paginado";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainContainer = ({ products }) => {
  const state = useSelector(state => state.auth)
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidad, setCantidad] = useState(9);
  const indiceFinal = paginaActual * cantidad;
  const indicePrimero = indiceFinal - cantidad;
  const productsItems = products.slice(indicePrimero, indiceFinal);

  console.log(state)
  
  function paginado(nroPagina){
      setPaginaActual(nroPagina);
  }

  return (
    <>
      <Main>
        <LeftBar resetPagina={paginado}/>
        <CardsContainer products={productsItems} />
      </Main>
      <Paginado
          cantidad={cantidad}
          allProducts={products}
          paginado={paginado}
          paginaActual={paginaActual}/>
    </>
  );
};

export default MainContainer;
