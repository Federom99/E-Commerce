import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import {
  addOrder,
  modifyItemStock,
  removeOrder,
  resetItemStock,
  setLocalStorage,
} from "../../../redux/actions/cart";
import { List, Img, Li , Text , Amount, Button , Div , CloseButton, PCant, SPAN, H3} from "./styles";

export default function OrderItem({ id , item }) {
  const [productOrder,setOrder] = useState({
    id: item.id,
    nombre: item.nombre,
    talle: item.talle,
    precio: item.precio,
    cantidad: item.cantidad,
    subtotal:(item.precio*item.cantidad)
  })
  const [cart , currentStock] = useSelector(state=>[ state.cart , state.cart.cartRemainingStock ])
  const [stock,setStock] = useState(0)
  // const index = useRef (-1)
  const getStock = async ()=>{
    // let index = currentStock.findIndex(p=>{
    //   if (p.id === id && p.talle === item.talle) return p
    // })
    // console.log(`El index de ${item.nombre} es ${index}`)
    // console.log(`El stock disponible de ${item.nombre} es ${currentStock[index]}`)
    // setStock(currentStock[index].stock)
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
    getStock()
    return ()=>{
      dispatch(setLocalStorage(cart))
    }
  },[])

  let noRender= true
  useEffect(()=>{
    if(!noRender){
      noRender=false
    }
    else{
      dispatch(addOrder(productOrder))
      dispatch(setLocalStorage(cart))      
    }
  },[productOrder])


  const incAmount = ()=>{
      if (productOrder.cantidad<stock){
        dispatch(modifyItemStock(id,item.talle))
      setOrder({
        ...productOrder,
        cantidad:productOrder.cantidad+1,
        subtotal:item.precio*(productOrder.cantidad+1)
      })
    }
  }
  const decAmount = () => {
    if (productOrder.cantidad > 1) {
      dispatch(modifyItemStock(id,item.talle,-1))
      setOrder({
        ...productOrder,
        cantidad:productOrder.cantidad-1,
        subtotal:item.precio*(productOrder.cantidad-1)
      })
    }
  };
  const removeItem = () => {
    dispatch(removeOrder(item.id,item.talle));
    dispatch(resetItemStock(id,item.talle))
  };
  return (
    <Div key={id}>
      <CloseButton onClick={removeItem}><BsTrashFill/></CloseButton>
      <List>
        <Li key={`${id}img`}>
          <Img src={`${item.imagen}`} alt={`Imagen de ${item.nombre}`} />
        </Li>
        <Li key={`${id}text`}>
          <Text>
            <H3>{item.nombre}</H3>
            {item.talle !=='Sin talle' ? (<H3>Talle: {item.talle}</H3>) : null }
            <h5>{item.descripcion}</h5>
          </Text>
        </Li>
        <Li key={`${id}price`}>
          <h3>${Intl.NumberFormat("es-AR").format(item.precio)}</h3>
        </Li>
        <Li key={`${id}amount`}>
          <Amount>
            <Button onClick={decAmount}>-</Button>
            <PCant>{productOrder.cantidad}</PCant>
            <Button onClick={incAmount}>+</Button>            
          </Amount>
            {     
              stock ? stock<=productOrder.cantidad ? (<SPAN>Stock maximo</SPAN>) : null : null
            }
        </Li>
        <Li key={`${id}subtotal`}>
          <h3>${Intl.NumberFormat("es-AR").format(productOrder.subtotal)}</h3>
        </Li>
      </List>
    </Div>
  );
}
