import styled from "styled-components";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

export const DIV = styled.div`
  ${fadeIn({ time: "0.5s" })};
  padding: 1rem 1.5rem;
  max-width: 335px;
  height: auto;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cardBackground};
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowColor};
  }
`;
export const StyledPopup = styled(Popup)`
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
  @keyframes mymove {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    25% {
      background: rgba(0, 0, 0, 0.2);
    }
    50% {
      background: rgba(0, 0, 0, 0.5);
    }
    100% {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  &-overlay {
    /* -webkit-animation: mymove 0.3s forwards; */
    animation: mymove 0.3s forwards;
  }
  &-content {
    animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
`;
export const DivBis = styled.div`
  width: inherit;
  position: relative;
  z-index: 0;
`;

export const FavContainer = styled.div`
  color: black;
  position: absolute;
  z-index: 1337;
  /* top: 10px;
  left: 10px; */
  margin: 10px;
  width: 40px auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 365px;
`;

export const InfoContainer = styled.div`
  text-align: center;
  padding: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${DIV}:hover & {
    white-space: normal;
    margin-bottom: -2rem;
  }
`;

export const H2 = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  font-size: 1.1rem;
  font-weight: 600;
`;
export const ImgLink = styled(Link)`
  text-decoration: none;
`;

export const PriceSize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.9rem;
`;

export const Select = styled.select`
  padding-left: 0.5rem;
  width: fit-content;
  height: 40px;
  font-weight: 500;
  font-family: inherit;
  color: ${(props) => props.theme.colorTalla};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.btnTalla};
`;

export const P = styled.p`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  border-radius: 5px;
`;

export const Button = styled.div`
  background-color: ${({ theme }) => theme.buttonCTA};
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  width: 100%;
  height: 40px;
  transition: all .2s ease;
  // font-weight: 600;
  &:hover {
    background-color: whitesmoke;
    color: black;
    font-weight: bold;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadowButtonCTA};
  }
`;
export const NoButton = styled(Button)`
  background-color: grey;
`;
export const Favorite = styled.button`
  color: red;
  width: 25px;
  height: 25px;
  background-color: white;
  border: none;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    color: black;
  }
`;
