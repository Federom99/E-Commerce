import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllFavs, removeDetail } from "../../redux/actions/favoritos.js"
import FavCard from "./FavCard/index.jsx"
import { Li, List } from "./styles"


export default function Compras (){
const favs = useSelector( state => state.favorites)
const dispatch = useDispatch();
const {id} = useParams()

useEffect(()=>{
    dispatch(getAllFavs(id))
    return ()=>{
        dispatch(removeDetail())
    }
},[])
    return(
        <List>
            {
                favs.userFavorites.map(id=><Li key={id}><FavCard productId={id}/></Li>)
            }
        </List>
        )
}