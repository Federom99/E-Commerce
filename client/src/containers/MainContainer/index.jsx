import React from "react";

import { Main } from "./styles";
import CardsContainer from "../CardsContainer";
import LeftBar from "../../components/LeftBar";
import Footer from "../../components/Footer";

const MainContainer = () => {
  return (
    <Main>
      <LeftBar />
      <CardsContainer />
    </Main>
  );
};

export default MainContainer;
