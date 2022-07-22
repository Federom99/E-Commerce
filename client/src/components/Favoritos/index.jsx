import { useSelector } from "react-redux"
import FavCard from "./FavCard/index.jsx"
import { Li, List } from "./styles"


export default function Compras (){
const favs = useSelector( state => state.favorites)

    return(
        <List>
            {
                favs.userFavorites.map(id=><Li key={id}><FavCard productId={id}/></Li>)
            }
        </List>
        )
}