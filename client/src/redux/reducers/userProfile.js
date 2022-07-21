const initialState = {
    user: {}
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}