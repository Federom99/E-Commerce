

const initialState = {};

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'action':
            return state;
        default:
            return state
    }
};
export default rootReducer;