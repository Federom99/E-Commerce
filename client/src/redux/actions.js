import { ADD_CART, MODIFY_CART, PRICE_CART, PRICE_REMOVE_CART, REMOVE_CART } from "./actionTypes"

export const getProducts = () => {
    return async function(dispatch){
        const response = await fetch("http://localhost:3001/products")
        const data = await response.json()
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

export const addPriceCart = (price,id) =>{
    return{
        type:PRICE_CART,
        payload:{price,id},
    }
}

export const removePriceCart = (id)=>{
    return{
        type:PRICE_REMOVE_CART,
        payload:id,
    }
}

export const orderByCategoryName = (category) => ({
    type: 'ORDER_BY_CATEGORY',
    payload: category
})
export const getProduct = (productId) => {
    return async function (dispatch){
        const response = await fetch(`http://localhost:3001/product/${productId}`)
        const data = await response.json()
        dispatch({type: 'GET_PRODUCT', payload: data})
    }
}

