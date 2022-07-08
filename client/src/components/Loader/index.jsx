import React from "react";
import { ContainerCradle, Dot, FullContainer } from "./style";

function Loading() {
  return (
    <FullContainer>
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
