import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

import {
  Main,
  Div,
  ImageContainer,
  Image,
  InfoContainer,
  H2,
  P,
  Stars,
  SizeInfo,
  Description,
  Size,
  Button,
  Review,
} from "./styles";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ProductDetail = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <Main>
      <Div>
        <ImageContainer>
          <Image src="https://static.bershka.net/4/photos2/2022/V/0/1/p/0156/168/800/0156168800_2_4_1.jpg?t=1648213728518" />
        </ImageContainer>
        <InfoContainer>
          <H2>Pantalón wide leg bolsillos</H2>
          <P stock={8}>$ 35.00 USD</P>
          <Stars>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={20}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </Stars>
          <SizeInfo>
            <Size>S</Size>
            <Size>M</Size>
            <Size>L</Size>
            <Size>XL</Size>
          </SizeInfo>
          <Description>
            Pantalon Pantalon Pantalon Pantalon Pantalon Pantalon Pantalon
          </Description>
          <Button>Add to cart</Button>
          <Review placeholder="Enter a review of the product"></Review>
          <p>Falta button para enviar review</p>
        </InfoContainer>
      </Div>
    </Main>
  );
};

export default ProductDetail;
