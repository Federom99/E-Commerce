import styled from "styled-components";

export const Main = styled.main`
  padding-top: 120px;
  padding: 1rem;
  min-width: 375px;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 850px) {
    margin: 0 auto;
  }
`;

export const Div = styled.div`
  // background-color: grey;
  border-style: none;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 1440px;
  height: 90vh;
  margin: auto;
  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  // background-color: blue;
  height: 80%;
  // max-width: 500px;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 1);
`;

export const Image = styled.img`
  height: 100%;
`;

export const InfoContainer = styled.div`
/* background-color: blue; */
  padding: 1rem;
  max-width: 500px;
  margin-top: 1rem;
  margin-left: 4rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 0.5);
  box-shadow: 0px 4px 15px 0px rgba(153, 153, 153, 0.5);
  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const H2 = styled.div`
  color: ${(props) => props.theme.colorTextPri};
  font-size: 1.3rem;
  font-weight: 600;
  margin: auto;
  margin-bottom: 1rem;
`;

export const P = styled.p`
  position: relative;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorTextPri};
  text-align: center;
  &::after {
    text-align: center;
    margin: auto;
    margin-top: 0.5rem;
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
  margin: 1rem 0;
`;

export const SizeInfo = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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
  width: 80%;
  padding: 10px;
  background-color: #181818;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
    color: black;
    cursor: pointer;
    border-color: black;
    border-style: solid;
  }
`;

export const Review = styled.textarea`
  margin-bottom: 1rem;
  padding: 1rem;
  height: 100px;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: 1px solid ${(props) => props.theme.backgroundElement};
  }
`;
