import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Li , Error , Div , Header , CatList , Main, PriceSection, BOTON} from "./styles";
import OrderItem from '../../components/Cart/OrderItem';
import { Link } from "react-router-dom";
import { setLocalStorage } from "../../redux/actions/cart";
export default function ShoppingCart() {
  const [cart , shoppingCart,order] = useSelector((store) => [store.cart , store.cart.shoppingCart,store.cart.order]);
  const [amount,setAmount] = useState(shoppingCart.length)
  const { user: currentUser } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch()

  useEffect(()=>{
    setAmount(shoppingCart.length)
  },[shoppingCart.length])

  useEffect(()=>{  
    dispatch(setLocalStorage(cart))
    return () =>{
      dispatch(setLocalStorage(cart))
    }
  },[])

  
  const price = order.reduce((prev,compra)=> prev+compra.subtotal,0)
  return (
    <Div>
      { shoppingCart && shoppingCart.length ? (
        <List>
          <Li>
            <Header>
              {
                  amount >1 ? <p> Finalizar compra de {amount} productos </p> : <p> Finalizar compra </p>
              }
            </Header>
          </Li>
          <Li>
            {/* <section>
              <CatList>
                <Li><h2>Producto</h2></Li>
                <Li><h2>Descripcion</h2></Li>
                <Li><h2>Precio unitario</h2> </Li>
                <Li><h2>Cantidad</h2></Li>
                <Li><h2>Subtotal</h2></Li>
              </CatList>
            </section> */}
            <Main>
              {
              shoppingCart.map(item=><OrderItem key={`${item.id}+${item.talle}`} id={item.id} item={item}/>)
              }
            </Main>            
          </Li>
          <Li>
            <PriceSection>Precio final: ${Intl.NumberFormat("es-AR").format(price)}</PriceSection>
          </Li>
          <Li>
              <PriceSection>
              {
                currentUser ? (
                  <Link to="/checkout">
                      <BOTON>Iniciar compra</BOTON>
                  </Link>
                ) : (
                  <Link to="/login">
                      <BOTON>Inicia sesion para comprar</BOTON>
                  </Link>
                )
              }
              </PriceSection>
          </Li>
        </List>
      ) : (
        <Error>No hay items en su carrito</Error>
      )}
    </Div>
  );
}