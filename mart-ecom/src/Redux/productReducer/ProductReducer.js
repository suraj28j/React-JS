const initState = {
    cartData: [],
    products: []
}

export const productReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const existProduct = state.cartData.find((item) => {
                return item.id === action.payload.id;
            })
            if (existProduct) {
                existProduct.quantity++;
                return {
                    ...state, cartData: [...state.cartData]
                }
            }
            else {
                action.payload.quantity = 1;
                return {
                    ...state, cartData: [...state.cartData, action.payload]
                }
            }
        case "REMOVE_FROM_CART":
            let filterProducts = state.cartData.filter((item) => {
                return item.id !== action.payload;
            })
            return {
                ...state, cartData: [...filterProducts]
            }
        case "SET_DECREMENT":
            const findItem = state.cartData.find((item) => {
                return item.id === action.payload
            })
            findItem.quantity = findItem.quantity > 1 ? findItem.quantity - 1 : 1;
            return {
                ...state, cartData: [...state.cartData]
            }
        default:
            return state
    }
}