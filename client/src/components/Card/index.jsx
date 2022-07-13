import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AddPopUp from "../PopUp";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";
import { postFavorite } from '../../redux/actions/product';
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
  ImgLink,
  Favorite
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

  const handleChange = (event) => {
    size.current = event.target.value
  }

  function agregar ( id ) {
    dispatch(postFavorite(id));
    alert("Agregado a favoritos !");
    console.log(id);
}

  const formatPrice = new Intl.NumberFormat("es-AR").format(precio);
  return (
    <DIV>
      <ContainerImage>
        <ImgLink to={`/detail/${id}`}><Image src={imagen} /></ImgLink>
      </ContainerImage>
      <InfoContainer>
        <H2 to={`/detail/${id}`}>{nombre}</H2>
        <div>
          <PriceSize>
            <Select onChange={ () => handleChange(id)}>
              {talles.map((talle, i) => (
                <option key={i} value={talle.talle}>{talle.talle}</option>
              ))}
            </Select>
            <P>$ {formatPrice}</P>
          </PriceSize>
          <Button onClick={add}>Add to card</Button>
          <Favorite onClick={agregar}>
            <svg classxmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Favorite>
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
