import React, { useEffect } from "react";

import { Main } from "./styles";
import CardsContainer from "../CardsContainer";
import LeftBar from "../../components/LeftBar";
import Paginado from "../../components/Paginado/Paginado";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFavs, getUserId } from "../../redux/actions/favoritos";
import ModalContainer from "../../components/ModalReview/ModalContainer";
import Modal from "../../components/ModalReview";
import {
  changeModalClose,
  changeModalOPen,
  changeModalReview,
} from "../../redux/actions/reviews";

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
  let norender = false;
  useEffect(() => {
    if (!norender) {
      norender = true;
    } else {
      if (favs.userId) dispatch(getAllFavs(favs.userId));
    }
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
