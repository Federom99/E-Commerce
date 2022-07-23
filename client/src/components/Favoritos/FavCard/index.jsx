import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getFavProducts  } from "../../../redux/actions/favoritos";
import { CardLi, CardList, Img, ImgContainer } from "./styles";


export default function FavCard ({productId}){
const [isLoading,setIsLoading] = useState(true);
const favProducts = useSelector(state=>state.favorites.favDetail)
const [data,setData] = useState({});
const dispatch = useDispatch()

useEffect(()=>{    
        dispatch(getFavProducts(productId))
        const product = favProducts.filter(p=>p.id === productId)
        setData(product[0])
        // console.log(product)
},[])

useEffect(()=>{
    if(favProducts){
        const product = favProducts.filter(p=>p.id === productId)
        setData(product[0])
    }    
        if( data &&  Object.keys(data).length) {
            setTimeout(() => {
                setIsLoading(false)                
            }, 1500);

        }    
},[data,favProducts])
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