import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AddPopUp from "../PopUp";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";
import {
  DIV,
  ContainerImage,
  Image,
  InfoContainer,
  PriceSize,
  Button,
  H2,
  StyledPopup,
  ExtraInfo,
  Select,
  P,
} from "./styles";

const Card = ({ id, nombre, imagen, descripcion, precio, talles }) => {
  const [open, setOpen] = useState(false);
  const size = useRef(talles[0].talle)
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const closeModal = () => setOpen(false);

  const add = () => {
    //dispatch al carrito
    let talle = size.current
    let order = {
      id,
      nombre,
      descripcion,
      imagen,
      precio,
      talle,
      cantidad: 1,
    };
    dispatch(addToCart(order));
    setOpen((isOpen) => !isOpen);
  };

  const handleChange = (event)=>{
    size.current = event.target.value
  }


  const formatPrice = new Intl.NumberFormat("es-AR").format(precio);
  return (
    <DIV>
      <ContainerImage>
        <Image src={imagen} />
      </ContainerImage>
      <InfoContainer>
        <H2 onClick={() => navigate(`/detail/${id}`)}>{nombre}</H2>
        <div>
          <PriceSize>
            <Select onChange={handleChange}>
              {talles.map((talle, i) => (
                <option key={i} value={talle.talle}>{talle.talle}</option>
              ))}
            </Select>
            <P>$ {formatPrice}</P>
          </PriceSize>
          <Button onClick={add}>Add to card</Button>
          <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
            <AddPopUp
              id={id}
              nombre={nombre}
              img={imagen}
              precio={precio}
              talle={size}
              close={closeModal}
            />
          </StyledPopup>
        </div>
      </InfoContainer>
    </DIV>
  );
};

export default Card;
