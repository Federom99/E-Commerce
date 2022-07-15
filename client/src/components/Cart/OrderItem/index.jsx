import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  removeCart,
  removeOrder,
  setLocalStorage,
} from "../../../redux/actions/cart";
import { List, Img, Li , Text , Amount, Button , Div , CloseButton} from "./styles";

export default function OrderItem({ item }) {
  const [productOrder,setOrder] = useState({
    id: item.id,
    nombre: item.nombre,
    talle: item.talle,
    precio: item.precio,
    cantidad: item.cantidad,
    subtotal:(item.precio*item.cantidad)
  })
  const [shoppingCart , cart ] = useSelector(state=>[state.cart.shoppingCart , state.cart])
  const [stock,setStock] = useState(0)

  const getStock = async ()=>{
    const product = await axios.get(`http://localhost:3001/product/${item.id}`)
    if (item.talle === 'Sin talle'){
      setStock(product.data.talles[0].producto_talle.stock)
    }
    else {
      const index = product.data.talles.findIndex(p=>p.talle === item.talle);
      setStock(product.data.talles[index].producto_talle.stock);
    }
  }
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(addOrder(productOrder))
    dispatch(setLocalStorage(cart))
  },[productOrder,shoppingCart])
  useEffect(()=>{
    getStock()
  },[])

  const incAmount = ()=>{
      if (productOrder.cantidad<stock){
      setOrder({
        ...productOrder,
        cantidad:productOrder.cantidad+1,
        subtotal:item.precio*(productOrder.cantidad+1)
      })
    }
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
            {     
              stock ? stock<=productOrder.cantidad ? (<span>Stock maximo</span>) : null : null
              // stock <= productOrder.cantidad ? (<span>Stock maximo</span>) : null
            }
          </Amount>
        </Li>
        <Li>
          <h3>${productOrder.subtotal}</h3>
        </Li>
      </List>
    </Div>
  );
}
