import React from "react";

import { Main } from "./styles";
import CardsContainer from "../CardsContainer";
import LeftBar from "../../components/LeftBar";
import Footer from "../../components/Footer";

const MainContainer = ({ products }) => {
  return (
    <Main>
      <LeftBar />
      <CardsContainer products={products} />
    </Main>
  );
};

export default MainContainer;
