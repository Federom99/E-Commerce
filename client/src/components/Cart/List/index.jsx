
import OrderItem from "../OrderItem"
import { Li, List , Ord } from "./styles"



export default function OrderList ({shoppingCart,total,setTotal}){    
    return(
        <div>
            <header>
                <List>
                    <Li>Producto</Li>
                    <Li>Descripcion</Li>
                    <Li>Precio unitario</Li>
                    <Li>Cantidad</Li>
                    <Li>Subtotal</Li>
                </List>
            </header>
            <Ord>
                {
                    shoppingCart.map(item=><OrderItem item={item}/>            
                    )
                }
            </Ord>
        </div>
    )
}