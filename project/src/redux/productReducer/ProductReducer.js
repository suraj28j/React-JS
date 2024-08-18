const initState = {
    cartData: [],
    products: [],
    // removeProductsFromCart:[]
};

export const productReducer = (state = initState, action) => {
    
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, cartData: [...state.cartData, action.payload]
            };
           
        case 'REMOVE_FROM_CART':
            const filterProduct = state.cartData.filter((cartItem) => {
                return cartItem.id !== action.payload
            })
            return {
                ...state, cartData: filterProduct
            };
        default: return state;
    }
}