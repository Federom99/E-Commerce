import { ADD_CART, MODIFY_CART, REMOVE_CART } from "./actionTypes"

export const getProducts = () => {
    return async function(dispatch){
        const response = await fetch("http://localhost:3001/products")
        const data = await response.json()
        console.log(data)
        if(data !== undefined){
            dispatch({type: 'GET_PRODUCTS', payload: data})
        }
    }
}

export const addToCart = (order)=>{
    return{
        type:ADD_CART,
        payload:order
    }
}

export const modifyCart = (details)=>{
    return{
        type:MODIFY_CART,
        payload:details,
    }
}

export const removeCart = (productId)=>{
    return{
        type:REMOVE_CART,
        payload:productId,
    }
};