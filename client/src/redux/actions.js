export const getProducts = () => {
    return async function(dispatch){
        const response = await fetch("http://localhost:3001/products")
        const data = await response.json()
        if(data !== undefined){
            dispatch({type: 'GET_PRODUCTS', payload: data})
        }
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
