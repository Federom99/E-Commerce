import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  removeCart,
  removeOrder,
} from "../../../redux/actions/cart";

import { List, Img, Li , Text , Amount, Button , Div , CloseButton} from "./styles";

export default function OrderItem({ item }) {
  const [productOrder,setOrder] = useState({
    id: item.id,
    talle: item.talle,
    cantidad: item.cantidad,
    subtotal:(item.precio*item.cantidad)
  })


  const shoppingCart = useSelector(state=>state.cart.shoppingCart)

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(addOrder(productOrder))
  },[productOrder,shoppingCart])


  const incAmount = ()=>{
    setOrder({
      ...productOrder,
      cantidad:productOrder.cantidad+1,
      subtotal:item.precio*(productOrder.cantidad+1)

  const incAmount = () => {
    setPriceCart({
      ...priceCart,
      cantidad:priceCart.cantidad+1,
      subtotal:item.precio*(priceCart.cantidad+1)
    })
  }

  const decAmount = () => {
    if (productOrder.cantidad > 1) {
      setOrder({
        ...productOrder,
        cantidad:productOrder.cantidad-1,
        subtotal:item.precio*(productOrder.cantidad-1)
      })
    }
  };
  const removeItem = () => {

    dispatch(removeCart(item.id,item.talle))
    dispatch(removeOrder(item.id,item.talle));

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
            <p>{productOrder.cantidad}</p>
            <Button onClick={incAmount}>+</Button>
          </Amount>
        </Li>
        <Li>
          <h3>${productOrder.subtotal}</h3>
        </Li>
      </List>
    </Div>
  );
}
