import React, { useEffect } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftBar from "../../components/LeftBar";
import Paginado from "../../components/Paginado/Paginado";
import { getAllFavs, getUserId } from "../../redux/actions/favoritos";
import CardsContainer from "../CardsContainer";
import { Main } from "./styles";

const MainContainer = ({ products }) => {
  const [state, favs] = useSelector((state) => [state.auth, state.favorites]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cantidad, setCantidad] = useState(9);
  const indiceFinal = paginaActual * cantidad;
  const indicePrimero = indiceFinal - cantidad;
  const productsItems = products.slice(indicePrimero, indiceFinal);
  const dispatch = useDispatch();
  // console.log(state)

  useEffect(() => {
    if (state.user) {
      dispatch(getUserId(state.user.name, state.user.email));
    }
  }, []);
  useEffect(() => {
    if (favs.userId) dispatch(getAllFavs(favs.userId));
  }, [favs.userId]);

  function paginado(nroPagina) {
    setPaginaActual(nroPagina);
  }

  return (
    <>
      <Main>
        <LeftBar resetPagina={paginado} />
        <CardsContainer products={productsItems} />
      </Main>
      <Paginado
        cantidad={cantidad}
        allProducts={products}
        paginado={paginado}
        paginaActual={paginaActual}
      />
    </>
  );
};

export default MainContainer;
