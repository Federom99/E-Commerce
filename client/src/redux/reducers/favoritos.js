const initialState = {
    userId:'',
    userFavorites:[],
    favDetail:[]
}

export default function favReducer (state=initialState,action){
    switch(action.type){
        case "GET_USER_ID":
            return{
                ...state,
                userId:action.payload
            }
        case "FAVOURITE_CREATED":
            return{
                ...state,
                userFavorites:[...state.userFavorites,action.payload.data.id]
            }
        case "FAVOURITE_DELETED":
            const index = state.userFavorites.findIndex( p => p===action.payload )
            state.userFavorites.splice(index,1)
            return{
                ...state,
            }
        case "GET_USER_FAVS":
            let list = action.payload.map(p=>p.productId)
            return{
                ...state,
                userFavorites:list
            }
        case "FAVOURITE_REMOVE":
            return{
                ...state,
                userId:'',
                userFavorites:[],
                favDetail:[]
            }
        case "GET_FAV_DETAIL":
            return{
                ...state,
                favDetail: [...state.favDetail,action.payload]
            }
        default:
        return {
            ...state
        }
    }
}