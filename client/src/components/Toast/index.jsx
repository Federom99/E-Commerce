import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { removeOrder, resetItemStock } from "../../redux/actions/cart";
import { deleteUserFav } from "../../redux/actions/favoritos";
import { Button, Text } from "./styles";

export default function ToastMsg ({tipo , name , closeToast , toastProps , userId, productId, setFavStatus, productSize }){
    const dispatch=useDispatch()
    const deleteFav = ()=>{        
        dispatch(deleteUserFav(userId,productId))
        setFavStatus(false)
        closeToast()
    }
    const deleteCart = ()=>{        
        dispatch(removeOrder(productId,productSize))
        dispatch(resetItemStock(productId,productSize))
    }
    return(
        <div>

            <Text>
                 Está seguro que quiere eliminar {tipo === 'fav' ? "de favoritos " : "del carrito " } a {name}  ?           
            </Text>
            <div>
                {tipo === "fav" ? (<Button onClick={deleteFav}>Confirmar</Button>) : (<Button onClick={deleteCart}>Confirmar</Button>)}
                {/* <Button onClick={closeToast}>Cancelar</Button> */}
            </div>
        </div>
    )
}