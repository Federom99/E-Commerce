import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { getAllFavs, removeDetail } from "../../redux/actions/favoritos.js"
import Loading from "../Loader/index.jsx"
import FavCard from "./FavCard/index.jsx"
import { Li, List, StyledContainer } from "./styles"


export default function Compras ({theme}){
const favs = useSelector( state => state.favorites)
const dispatch = useDispatch();
const {id} = useParams()
const [isLoading,setIsLoading] = useState(true)
useEffect(()=>{
    dispatch(getAllFavs(id))
    return ()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        dispatch(removeDetail())
    }
},[])
    return(
        <div>            
        {
            isLoading ? (<Loading/>) : (
            
            <List>
                {
        theme === 'light' ? (<ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
        />) : (<ToastContainer
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
                {
                    favs.userFavorites.length ? favs.userFavorites.map(id=><Li key={id}><FavCard productId={id}/></Li>) : <h3>No hay productos en favoritos</h3>
                }
            </List>)
        }
    
        </div>
        )

}