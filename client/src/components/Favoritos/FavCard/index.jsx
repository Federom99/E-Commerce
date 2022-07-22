import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/favoritos";
import { CardLi, CardList, Img, ImgContainer } from "./styles";


export default function FavCard ({productId}){
const [isLoading,setIsLoading] = useState(true);
const favProducts = useSelector(state=>state.favorites.favDetail)
const [data,setData] = useState({});
const dispatch = useDispatch()
let norender = true
useEffect(()=>{
        if( data && data.imagen) {
            setTimeout(() => {
                setIsLoading(false)                
            }, 1500);
        }
        else{
            dispatch(getProducts(productId))
            const product = favProducts.filter(p=>p.id === productId)
            setData(product[0])
        }
},[data])
    return(    
        <div>
           {
            isLoading ? (<h3>Loading</h3>) : (<main>
                <CardList>
                    <CardLi>
                        <ImgContainer>
                            <Img src={data.imagen}/>
                        </ImgContainer>
                    </CardLi>
                    <CardLi>
                        <h3>{data.nombre}</h3>
                        <p>{data.descripcion}</p>    
                    </CardLi>
                    <CardLi>
                        <h4>Precio unitario</h4>
                        <p>${data.precio}</p>
                    </CardLi>
                </CardList>
            </main>)
           }
        </div>
    )
}