import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyCart, modifyItemStock, removeCart, resetItemStock, setLocalStorage } from "../../redux/actions/cart";
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
  H3,
  H2,
  H4
} from "./styles";

export default function AddPopUp({ id, nombre, img, precio, close , talle , checkStock , currentStock}) {
  const [pedido, setpedido] = useState({
    cantidad: 1,
    precio: precio,
  })
  const [onStock,setOnStock] = useState(true)
  const stock = useRef(0)
  const cart = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const index = useRef(-1)
  

  useEffect(()=>{    
    return ()=>{
      dispatch(setLocalStorage(cart))
    }
  },[])

  const incAmount = async() => {
    if (index.current===-1){
      index.current=currentStock.findIndex(p=>{
        if (p.id===id && p.talle===talle.current) return p
      })
      stock.current = currentStock[index.current].stock-1      
    }
    if(stock.current>0){
      stock.current =stock.current-1
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
      stock.current+=1
      setOnStock(true)
      setpedido({
        ...pedido,
        cantidad:pedido.cantidad-1,
        precio:((pedido.cantidad-1)*precio)
      })
    }
  };
  
  const addMore = () => {
    let amount= pedido.cantidad
    let size = talle.current
    if (index.current===-1){
      index.current=currentStock.findIndex(p=>{
        if (p.id===id && p.talle===talle.current) return p
      })
      stock.current = currentStock[index.current].stock-1      
    }

    if (stock.current>=0){
      let newOrder = {
        id,
        size,
        amount,
      };
      toast.success(`${amount} items agregados al carrito`)
      dispatch(modifyCart(newOrder));
      dispatch(modifyItemStock(id,size,amount))
      close();
    }
    else toast.error(`No hay suficiente stock`)
  };
  const deleteCartItem = () => {
    let size=talle.current
    dispatch(resetItemStock(id,size))
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
          talle.current ==='Sin talle' ? (<H2> <Ok /> {nombre} añadido al carrito </H2>) : (<H2><Ok /> {nombre} Talle:{talle.current} Añadido al carrito</H2>)
        }      
      </Header>
      <Main>
        <Img src={`${img}`} />
        <Detail>
          {
            talle.current !== 'Sin talle' ? (<H4>Talle: {talle.current}</H4>) : null
          }
          <H3>Subtotal: ${formatPrice(precio)}</H3>
          
          <Button onClick={deleteCartItem}>Eliminar <Trash/></Button>
        </Detail>
        <Options>
                <H3>Desea añadir más?</H3>
                <IncDiv>
                  <DecButton onClick={decAmount} size="lg"/>
                  <Amount>{pedido.cantidad}</Amount>
                  <IncButton onClick={incAmount} size="lg"/>
                </IncDiv>
                {              
                  pedido.cantidad >1 ? (<H3>Se agregarán {pedido.cantidad} prendas</H3>) : (<H3>Se agregará 1 prenda</H3>)
                }
                {
                onStock ? null : (<ErrText>Stock máximo</ErrText>)
                }
                
                <H3>Subtotal: ${formatPrice(pedido.precio+precio)}</H3>
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
