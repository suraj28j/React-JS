const initState = {
    cartData:[],
    // products:[]
};

export const productReducer = (state=initState, action) => {

    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,cartData:[...state.cartData,action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {

            };
        default: return state;
    }
}