import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserFav, deleteUserFav, getAllFavs } from "../../redux/actions/favoritos";
import { FavOff, FavOn } from "./styles";
import {toast} from "react-toastify";

export default function FavIcon ({productId , productName}){
    const [favStatus , setFavStatus] = useState(false);
    const favs = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    
    const handleChange = ()=>{
        setFavStatus(status => !status)
        let userId=favs.userId;
        if (!favStatus){
            // añadido:
            dispatch(createUserFav(userId,productId))
            toast.success(`${productName} añadido a favoritos`)
        }
        else {
            console.log('userId: ', userId, 'productId: ',productId)
            dispatch(deleteUserFav(userId,productId))
            toast.error(`${productName} eliminado de favoritos`)
        }
    }
    useEffect(()=>{
        if (favs.userFavorites.includes(productId)) setFavStatus(true)
    },[favs.userFavorites])
    return(
        <div>
            {
                favStatus ? (<FavOn onClick={handleChange}/>) : (<FavOff onClick = {handleChange}/>)
            }
        </div>
    )
}