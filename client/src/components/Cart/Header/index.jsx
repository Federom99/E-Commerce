import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {Main} from "./styles"

export default function Header ({ cantidad }){
    const [amount,setAmount] = useState(cantidad)
    const store = useSelector(state=>state.cart.shoppingCart.length)
    useEffect(()=>{
        setAmount(store)
    },[store])
    return(
        <Main>
            {
                amount>1 ? <h1> Finalizar compra de {amount} productos </h1> : <h1> Finalizar compra </h1>
            }
                
        </Main>
    )
}