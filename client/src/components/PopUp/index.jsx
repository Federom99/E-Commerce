import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyCart, removeCart } from "../../redux/actions/cart";

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
} from "./styles";

export default function AddPopUp({ id, nombre, img, precio, close , talle}) {
  const [pedido, setpedido] = useState({
    cantidad: 1,
    precio: precio,
  })

  const dispatch = useDispatch();

  const incAmount = () => {
    setpedido({
      ...pedido,
      cantidad:pedido.cantidad+1,
      precio:((pedido.cantidad+1)*precio)
    })
  };
  const decAmount = () => {    
    if (pedido.cantidad > 1) {
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
    let newOrder = {
      id,
      size,
      amount
    };
    dispatch(modifyCart(newOrder));
    alert(`${amount} items extra agregados al carrito`);
    close();
  };
  const deleteCartItem = () => {
    let size = talle.current
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
