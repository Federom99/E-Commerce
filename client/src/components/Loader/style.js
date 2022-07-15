import styled from "styled-components";

export const FullContainer = styled.div`
  height: ${props=>props.alto};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCradle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

export const Dot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;
  transform-origin: center top;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background-color: #474554;
  }
  &:first-child {
    animation: swing 1.2s linear infinite;
  }
  &:last-child {
    animation: swing2 1.2s linear infinite;
  }
  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    25% {
      transform: rotate(70deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
  }

  @keyframes swing2 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    75% {
      transform: rotate(-70deg);
      animation-timing-function: ease-in;
    }
  }
`;
