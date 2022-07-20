import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPopUp from "../PopUp";
import { useNavigate } from "react-router-dom";
import { addToCart, modifyItemStock, setItemStock } from "../../redux/actions/cart";
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
  NoButton,
} from "./styles";
import axios from "axios";
import { ToastContainer , toast } from "react-toastify";
const Card = ({ id, nombre, imagen, descripcion, precio, talles }) => {
  const [open, setOpen] = useState(false);
  const [stock , setStock] = useState(true);
  const size = useRef(talles[0].talle);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const currentStock = useSelector(state=>state.cart.cartRemainingStock)

  const closeModal = () => setOpen(false);

  const checkStock = async (cantidad = 1) => {
    let talle = size.current;
    const product = await axios.get(`http://localhost:3001/product/${id}`);
    if (talle === "Sin talle") {
      if (product.data.talles[0].producto_talle.stock > cantidad) return true;
      else return false;
    } else {
      const index = await product.data.talles.findIndex(
        (p) => p.talle === talle
      );
      if (product.data.talles[index].producto_talle.stock > cantidad)
        return true;
      else return false;
    }
  };
  
  const handleStockError = (talle)=>{ 
    if (talle === 'Sin talle') toast.error (`No hay más stock de ${nombre}`,{
      toastId:'NoStockAccOnCard'
    })
    else toast.error(`No hay más stock de ${nombre} en talle ${talle}`,{
      toastId:'NoStockOnCard'
    })
    setStock(false)
  }
  
  const handleAddCart = async() => {
    let talle = size.current;
    let order = {
      id,
      nombre,
      descripcion,
      imagen,
      precio,
      talle,
      cantidad: 1,
    };
    const check = await checkStock()
    if (check){
      let index = currentStock.findIndex(p=>{
        if (p.id === id && p.talle === talle) return p
      })
      if (index !== -1){
        if((currentStock[index].stock-1)>=0){
          dispatch(modifyItemStock(id,talle))
          dispatch(addToCart(order))
          setOpen(isOpen=>!isOpen)
        }
        else {
          handleStockError(talle)
        }        
      }
      else{        
        dispatch(addToCart(order))
        dispatch(setItemStock(id,talle))
        setOpen(isOpen=>!isOpen)
      }
    }

  };

  const handleChange = (event) => {
    size.current = event.target.value;
    setStock(true)
  };

  const formatPrice = new Intl.NumberFormat("es-AR").format(precio);
  return (
    <DIV>
      <ContainerImage>
        <ImgLink to={`/detail/${id}`}>
          <Image src={imagen} />
        </ImgLink>
      </ContainerImage>
      <InfoContainer>
        <H2 to={`/detail/${id}`}>{nombre}</H2>
        <div>
          <PriceSize>

            <Select onChange={handleChange}>
              {talles.map((talle, i) => (
                <option key={i} value={talle.talle}>
                  {talle.talle}
                </option>
              ))}
            </Select>
            <P>$ {formatPrice}</P>
          </PriceSize>
          {
          stock ? (<Button onClick={handleAddCart}>Añadir al carrito</Button>) : (<NoButton className="NoStock" onClick={handleAddCart}>No hay stock</NoButton>)
          }      
          <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
            <AddPopUp
              id={id}
              nombre={nombre}
              img={imagen}
              precio={precio}
              talle={size}
              close={closeModal}
              checkStock={checkStock}
              currentStock={currentStock}
            />
          </StyledPopup>
        </div>
      </InfoContainer>
    </DIV>
  );
};

export default Card;
