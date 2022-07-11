import OrderItem from "../OrderItem"
import {
Li,
List,
Ord,
Div} from "./styles"

export default function OrderList ({ shoppingCart , setAlert }){    
    return(
        <Div>
            <Div>
                <List>
                    <Li><h2>Producto</h2></Li>
                    <Li><h2>Descripcion</h2></Li>
                    <Li><h2>Precio unitario</h2> </Li>
                    <Li><h2>Cantidad</h2></Li>
                    <Li><h2>Subtotal</h2></Li>
                </List>
            </Div>
            <Ord>
                {
                    shoppingCart.map(item=><OrderItem  setAlert={setAlert} item={item}/>            
                    )
                }
            </Ord>
        </Div>
    )
}