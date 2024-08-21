const initState = {
    cartData: [],
    products: [],
    // removeProductsFromCart:[]
};

export const productReducer = (state = initState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            // let findItem = state.cartData.map((item)=>{
            //     if(item.id===action.payload){
            //         // console.log(item);
            //         let incQuantity = item.quantity+1;
            //         return {
            //             ...item,quantity:incQuantity,
            //         }
            //     }else{
            //         // return item
            //         return {
            //             ...state,cartData:item,
            //         }
            //     }
               
            // });
            
            return {
                ...state, cartData: [...state.cartData, action.payload]
            };


        case 'REMOVE_FROM_CART':
            // let FindItemForDecrement = state.cartData.find((item) => {   
            //     return item.id === action.payload;
            //  })
             
            //  if(FindItemForDecrement.quantity>1){
            //      FindItemForDecrement.quantity = FindItemForDecrement.quantity-1;
            //      console.log(FindItemForDecrement.quantity);
            //     return state;
            //  }else{
            //     const filterProduct = state.cartData.filter((cartItem) => {
            //         return cartItem.id !== action.payload
            //     })
            //     return {
            //         ...state, cartData: filterProduct
            //     };
            //  };

             const filterProduct = state.cartData.filter((cartItem) => {
                return cartItem.id !== action.payload
            })
            return {
                ...state, cartData: filterProduct
            };
           
           

        case 'SET_INCREMENT':
            let increasedProduct = state.cartData.map((item)=>{
                if(item.id===action.payload){
                    // console.log(item);
                    let incQuantity = item.quantity+1;
                    return {
                        ...item,quantity:incQuantity,
                    }
                }else{
                    return item
                }
            });
            return {
                ...state,cartData:increasedProduct,
            }
        
        case 'SET_DECREMENT':
            let decreasedProduct = state.cartData.map((item)=>{
                if(item.id===action.payload){
                    // console.log(item);
                    let decQuantity = item.quantity-1;
                    return {
                        ...item,quantity:decQuantity,
                    }
                }else{
                    return item
                }
            });
            return {
                ...state,cartData:decreasedProduct
            }

        default: return state;
    }
}



/*
let finditem = cartData.find((item)=>{
        item.id === cartData.id

    })
        if(finditem){
        
        }else{
        cartData.push()
        }
        
*/


