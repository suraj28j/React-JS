// let state = {
//     count:0
// }

// let prevState = state;

// function increment(){
// [ Mutating State ] //
// state.count = state.count+1; 
// [ prevState === state] // true

// [ non-mutating State ] //
// state = {count:state.count+1};
// [ prevState === state] // false
// }

// increment()
// console.log(state.count);

// ------------------------------------------- //

import { createStore } from 'redux';

// console.dir(createStore);


const initialState = {
    name: "Suraj",
    age: 34,
    city: "Bangalore"
}

const action = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT"
}
function reducer(state=initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, age: state.age + 1 }
        case "DECREMENT":
            return { ...state, age: state.age + 1 }
        default:
            return state
    }
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
    
})

// console.log(store.getState());

store.dispatch({type:action.INCREMENT})
store.dispatch({type:action.DECREMENT})


