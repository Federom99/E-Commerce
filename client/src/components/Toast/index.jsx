import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { removeOrder } from "../../redux/actions/cart";
import { deleteUserFav } from "../../redux/actions/favoritos";
import { Button } from "./styles";

export default function ToastMsg ({tipo , name , closeToast , toastProps , userId, productId, setFavStatus, productSize }){
    const dispatch=useDispatch()
    const deleteFav = ()=>{
        console.log("se entra a la funcion: ",userId,productId)
        dispatch(deleteUserFav(userId,productId))
        setFavStatus(false)
        closeToast()
    }
    const deleteCart = ()=>{
        console.log('entro a delete')
        dispatch(removeOrder(productId,productSize))
        dispatch(resetItemStock(productId,productSize))
    }
    return(
        <div>
            <p>
                Está eliminando {tipo === 'fav' ? "de favoritos " : "del carrito " } a {name}                
            </p>
            <div>
                {tipo === "fav" ? (<Button onClick={deleteFav}>Confirmar F</Button>) : (<Button onClick={deleteCart}>Confirmar</Button>)}
                {/* <Button onClick={closeToast}>Cancelar</Button> */}
            </div>
        </div>
    )
}