import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Div } from "./styles";

export default function Pricing ({alert}){
    const [price,setPrice]=useState()
    const store = useSelector(store=>store.cart.priceCart)
    useEffect(()=>{
        let acum = 0 ;
        store.forEach(p=>{
            acum=acum+p.price            
        })
        setPrice(acum)
    },[alert])
    return(        
        <Div>
           <h2>
            Precio final: $ {price}
           </h2>
           <button>Terminar compra</button>
        </Div>
    )
}