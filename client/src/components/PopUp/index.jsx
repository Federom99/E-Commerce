import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyCart, removeCart, setLocalStorage } from "../../redux/actions/cart";
import { toast } from 'react-toastify';

import {
  MainDiv,
  Div,
  Header,
  Main,
  Detail,
  Options,
  Button,
  Closing,
  Img,
  Close,
  IncDiv,
  Text,
  Amount,
  DecButton,
  IncButton,
  Ok,
  AddMore,
  LinkButton,
  Trash,
  ErrText,
} from "./styles";

export default function AddPopUp({ id, nombre, img, precio, close , talle , checkStock}) {
  const [pedido, setpedido] = useState({
    cantidad: 1,
    precio: precio,
  })
  const [onStock,setOnStock] = useState(true)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(setLocalStorage(cart))
    }
  },[])
  const incAmount = async() => {
    let check = await checkStock(pedido.cantidad)
    if (check){
    if (!onStock) setOnStock(true)
    setpedido({
      ...pedido,
      cantidad:pedido.cantidad+1,
      precio:((pedido.cantidad+1)*precio)
    })
  }
  else setOnStock(false)
  };
  const decAmount = () => {    
    if (pedido.cantidad > 1) {
      setOnStock(true)
      setpedido({
        ...pedido,
        cantidad:pedido.cantidad-1,
        precio:((pedido.cantidad-1)*precio)
      })
    }
  };
  
  const addMore = async() => {
    let amount= pedido.cantidad
    let check = await checkStock(amount)
    let size = talle.current
    if (check){
      let newOrder = {
        id,
        size,
        amount,
      };
      toast.success(`${amount} items agregados al carrito`)
      dispatch(modifyCart(newOrder));
      close();
    }
    else toast.error(`No hay suficiente stock`)
  };
  const deleteCartItem = () => {
    let size=talle.current
    dispatch(removeCart(id,size));
    close();
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR").format(price);
  };

  return (
    <MainDiv>
      <Header>
        {
          talle.current ==='Sin talle' ? (<h2> <Ok /> {nombre} añadido al carrito </h2>) : (<h2><Ok /> {nombre} talle:{talle.current} añadido al carrito</h2>)
        }      
      </Header>
      <Main>
        <Img src={`${img}`} />
        <Detail>
          {
            talle.current !== 'Sin talle' ? (<h4>Talle: {talle.current}</h4>) : null
          }
          <h3>Subtotal: ${formatPrice(precio)}</h3>
          
          <Button onClick={deleteCartItem}>Eliminar item <Trash/></Button>
        </Detail>
        <Options>
                <h3>Desea añadir más?</h3>
                <IncDiv>
                  <DecButton onClick={decAmount} size="lg"/>
                  <Amount>{pedido.cantidad}</Amount>
                  <IncButton onClick={incAmount} size="lg"/>
                </IncDiv>
                {              
                  pedido.cantidad >1 ? (<h4>Se agregarán {pedido.cantidad} prendas</h4>) : (<h4>Se agregará 1 prenda</h4>)
                }
                {
                onStock ? null : (<ErrText>Stock máximo</ErrText>)
                }
                
                <h4>Subtotal: ${formatPrice(pedido.precio+precio)}</h4>
                <Button onClick={addMore}>Añadir <AddMore/></Button>
        </Options>
      </Main>
        <Closing>
          <LinkButton to="/cart">Ir al carrito</LinkButton>
          <Button onClick={close}>Seguir comprando</Button>
        </Closing>
    </MainDiv>
  );
}
