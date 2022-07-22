import axios from "axios";
const API_URL = 'http://localhost:3001';
export const getUserId = (userName , userMail) => async dispatch =>{
    const users = await axios.get(`${API_URL}/user?search=${userName}`)
    const user = users.data.filter(p=>p.mail===userMail);
    dispatch({
        type:"GET_USER_ID",
        payload: user[0].id
    })
}
export const getAllFavs = (userId) => async dispatch => {
    const favs = await axios.get(`${API_URL}/favoritos/wishlist/${userId}`)
    dispatch({
        type:"GET_USER_FAVS",
        payload:favs.data
    })
}

export const createUserFav = (userId , productId) => async dispatch =>{
    const newFav = await axios.post(`${API_URL}/create/favoritos`,{
        userId,
        productId
    })
    dispatch({
        type:"FAVOURITE_CREATED",
        payload: newFav,
    })
}
export const deleteUserFav = (userId , productId ) => async dispatch =>{
    try{
        console.log('userIdAct: ',userId, 'productIdAct: ',productId)
        const deleteFav = await axios.delete(`${API_URL}/favoritos/delete/${productId}`,{headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },data:{userId}})
        dispatch({
            type: "FAVOURITE_DELETED",
            payload: productId,
        })
    } catch(error){
        console.log(error)
    }
    
}
export const removeFavs = ()=>{
    return{
        type:"FAVOURITE_REMOVE"
    }
}