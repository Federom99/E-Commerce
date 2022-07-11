import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPriceCart,
  removeCart,
  removePriceCart,
} from "../../../redux/actions/cart";

import { List, Img, Li , Text , Amount, Button , Div , CloseButton} from "./styles";

export default function OrderItem({ item , setAlert}) {
  const [priceCart,setPriceCart] = useState({
    cantidad: item.cantidad,
    subtotal:(item.precio*item.cantidad)
  })

  const store = useSelector(state=>state.cart.priceCart)
  const dispatch = useDispatch();

  useEffect(() => {
    //envia modificacion de precios al carrito y alerta para el total
    dispatch(addPriceCart(priceCart.subtotal, item.id));
    setAlert(alert=>alert+1)
  }, [priceCart , store]);

  const incAmount = () => {
    setPriceCart({
      ...priceCart,
      cantidad:priceCart.cantidad+1,
      subtotal:item.precio*(priceCart.cantidad+1)
    })
  };
  const decAmount = () => {
    if (priceCart.cantidad > 1) {
      setPriceCart({
        ...priceCart,
        cantidad:priceCart.cantidad-1,
        subtotal:item.precio*(priceCart.cantidad-1)
      })
    }
  };
  const removeItem = () => {
    dispatch(removeCart(item.id));
    dispatch(removePriceCart(item.id));
  };
  return (
    <Div>
      <CloseButton onClick={removeItem}>X</CloseButton>
      <List>
        <Li>
          <Img src={`${item.imagen}`} alt={`Imagen de ${item.nombre}`} />
        </Li>
        <Li>
          <Text>
            <h3>{item.nombre}</h3>
            {item.talle !=='Sin talle' ? (<h4>Talle: {item.talle}</h4>) : null }
            <h5>{item.descripcion}</h5>
          </Text>
        </Li>
        <Li>
          <h3>${item.precio}</h3>
        </Li>
        <Li>
          <Amount>
            <Button onClick={decAmount}>-</Button>
            <p>{priceCart.cantidad}</p>
            <Button onClick={incAmount}>+</Button>
          </Amount>
        </Li>
        <Li>
          <h3>${priceCart.subtotal}</h3>
        </Li>
      </List>
    </Div>
  );
}
