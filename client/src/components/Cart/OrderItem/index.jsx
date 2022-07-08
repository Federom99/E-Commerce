import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addPriceCart, removeCart, removePriceCart } from "../../../redux/actions"
import { List , Img , Li} from "./styles"


export default function OrderItem ({item}){
    const [price,setPrice] = useState(item.precio)
    const [amount,setAmount] = useState(item.cantidad)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addPriceCart(price,item.id))
    },[price])
    const incAmount = ()=>{
        setAmount(amount+1)
        setPrice((amount+1)*item.precio)
        
    }
    const decAmount = ()=>{
        if (amount>1) {
            setAmount(amount-1)
            setPrice((amount-1)*item.precio)
        }
    }
    const removeItem = ()=>{
        dispatch(removeCart(item.id));
        dispatch(removePriceCart(item.id))
    }
    return (
        <List>
            <Li>
                <Img src={`${item.imagen}`} alt={`Imagen de ${item.nombre}`}/>
            </Li>
            <Li>
                <h3>{item.nombre}</h3>
            </Li>
            <Li>
                <h5>{item.escripcion}</h5>
            </Li>
            <Li>
                <h3>${item.precio}</h3>
            </Li>
            <Li>
                <button onClick={decAmount}>-</button><p>{amount}</p><button onClick={incAmount}>+</button>
            </Li>
            <Li>
                <h3>${price}</h3>
            </Li>
            <Li>
                <h3 onClick={removeItem}>Remove</h3>
            </Li>
        </List>
    )
                        
}