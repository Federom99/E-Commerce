import styled from "styled-components";

export const Main = styled.main`
  padding-top: 120px;
  padding: 1rem;
  min-width: 375px;
  /* max-width: 1440px; */
  margin: 0 auto;
  font-size: 16px;
  @media (min-width: 850px) {
    margin: 0 auto;
  }
`;

export const Div = styled.div`
  // background-color: grey;
  border-style: none;
  border-radius: 1rem;
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 20px;
  width: 70%;
  max-width: 1440px;
  /* height: 90vh; */
  margin: auto;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1250px) {
    grid-gap: 100px;
  }
`;

export const ImageContainer = styled.div`
  margin: 50px;
  /* @media (min-width: 1250px) {
    justify-self: end;
  } */
`;
export const FavContainer = styled.div`
  position: absolute;
`;
export const FavIncluye = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
`;

export const Image = styled.img`
  /* max-width: 166px; */
  box-shadow: ${({ theme }) => theme.shadowColor};
  max-width: 300px;
  @media (max-width: 870px) {
    width: 185px;
  }
`;

export const InfoContainer = styled.div`
  /* background-color: blue; */
  padding: 1rem;
  /* max-width: 260px; */
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: ${({ theme }) => theme.shadowColor};
  -moz-box-shadow: ${({ theme }) => theme.shadowColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  @media (min-width: 1250px) {
    justify-self: start;
  }
`;

export const H2 = styled.div`
  color: ${(props) => props.theme.color};
  font-size: 1.3rem;
  font-weight: 600;
  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
`;

export const P = styled.p`
  position: relative;
  /* margin: auto;
  margin-bottom: 1rem;
  font-weight: 600;
  color: ${(theme) => theme.color};
  text-align: center; */
  &::after {
    text-align: center;
    margin: auto;
    margin-bottom: 0.5rem;
    /* margin-top: 0.5rem; */
    content: "Stock: ${(props) => props.stock}";
    display: block;
    font-weight: 400;
    font-size: 0.85rem;
    font-style: italic;
  }
`;

export const Stars = styled.div`
  display: "flex";
  flex-direction: "row";
  margin-left: 2rem;
  margin-bottom: 5px;
`;

export const SizeInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  list-style: none;
`;

export const Size = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* margin-right: 1rem; */
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colorTextSec};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.colorTextPri};
  }
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const Button = styled.button`
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  background-color:  ${({ theme }) => theme.buttonCTA};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
    font-weight: bold;
    box-shadow: ${({ theme }) => theme.shadowButtonCTA};
  }
`;

export const ResenasContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-bottom: 5rem;
  max-width: 70%;
`;

export const DivRese = styled.div`
  background: #733fc8;
  grid-column: 1/3;
  grid-row: 1/2;
`;

export const EachDiv = styled.div`
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadowColor};
  color: black;
  margin-bottom: 1rem;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  & div {
    margin-right: 1rem;
    & img {
      border-radius: 50%;
      width: 4rem;
      /* border: 2px solid #cec5c5; */
      filter: ${(props) =>
        props.tema === "dark" ? "invert(89%)" : "invert(0)"};
    }
  }
`;

export const Detbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    margin: 0;
  }
  & .name {
    color: ${({ theme }) => theme.color};
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
    font-weight: 600;
  }

  & .designation {
    color: ${({ theme }) => theme.color};
    opacity: 50%;
    font-size: 0.8rem;
  }
`;

export const Review = styled.div`
  & div {
    display: flex;
    align-items: center;
  }
  & div > h4 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color};
    font-weight: 600;
    line-height: 1.5;
    /* margin-bottom: 0.8rem; */
  }
  & p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.color};
    font-weight: 500;
    opacity: 50%;
    line-height: 1.5;
  }
`;

export const Price = styled.p`
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.color};
  text-align: center;
`;
