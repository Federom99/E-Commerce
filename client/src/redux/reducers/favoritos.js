const initialState = {
    userId:'',
    userFavorites:[],
}

export default function favReducer (state=initialState,action){
    switch(action.type){
        case "GET_USER_ID":
            return{
                ...state,
                userId:action.payload
            }
        case "FAVOURITE_CREATED":
            console.log('newfav: ',action.payload)
            return{
                ...state,
                userFavorites:[...state.userFavorites,action.payload.data.id]
            }
        case "FAVOURITE_DELETED":
            const index = state.userFavorites.findIndex( p => p===action.payload.id )
            state.userFavorites.splice(index,1)
            return{
                ...state,
            }
        case "GET_USER_FAVS":
            console.log(action.payload)
            let list = action.payload.map(p=>p.productId)
            return{
                ...state,
                userFavorites:list
            }
        default:
        return {
            ...state
        }
    }
}