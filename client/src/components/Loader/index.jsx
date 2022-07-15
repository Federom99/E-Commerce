import React from "react";
import { ContainerCradle, Dot, FullContainer } from "./style";


function Loading({alto}) {
  return (
    <FullContainer alto={alto}>
      <ContainerCradle>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </ContainerCradle>
    </FullContainer>
  );
}

export default Loading;
