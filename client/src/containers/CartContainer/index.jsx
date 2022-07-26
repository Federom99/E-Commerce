import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Li , Error , Div , Header , CatList , Main, PriceSection, BOTON, Vaciar, Button, Text} from "./styles";
import OrderItem from '../../components/Cart/OrderItem';
import { Link } from "react-router-dom";
import { deleteCart, setLocalStorage } from "../../redux/actions/cart";
import { ToastContainer , toast } from "react-toastify";
export default function ShoppingCart({theme}) {
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
  const setToast = ()=>{
    toast.error(confirmarVaciado(),{
      toastId:'emptyCart'
    })
  }
  const confirmarVaciado = ()=>{
    return (
      <div>
        <Text>
          Está vaciando el carrito
        </Text>
        <Button onClick={resetCart}>Confirmar</Button>
      </div>
    )
  }
  const resetCart = ()=>{
    dispatch(deleteCart())
  }
  
  const price = order.reduce((prev,compra)=> prev+compra.subtotal,0)
  return (
    <Div>
      {
        theme === 'light' ? (<ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
        />): (<ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme={'dark'}
        />)
      }

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
          <Vaciar onClick={setToast}> Vaciar carrito</Vaciar>
        </List>
      ) : (
        <Error>No hay items en su carrito</Error>
      )}
    </Div>
  );
}
