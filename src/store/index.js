// import { createStore } from 'redux'




// const counterReducer = (state = {counter: 0},action) =>{
//  if(action.type === 'increment'){
//     return{
//         counter: state.counter + 1
//     };
//  }

//  if(action.type === 'increase'){
//     return{
//         counter: state.counter + action.amount
//     }
//  }
//  if(action.type === 'decrement'){
//     return{
//         counter: state.counter - 1
//     };
//  }

//  return state;
// };

// const store = createStore(counterReducer);

// export default store;


// This Hiding Code means I am showing Toggle functionality in down and If we want normal functionality we can use upper code

import {configureStore} from '@reduxjs/toolkit'; 
const initialState = {counter: 0, showCounter: true}


const counterReducer = (state = initialState,action) =>{
 if(action.type === 'increment'){
    return{
        counter: state.counter + 1,
        showCounter: state.showCounter
    };
 }

 if(action.type === 'increase'){
    return{
        counter: state.counter + action.amount,
        showCounter: state.showCounter
    }
 }
 if(action.type === 'decrement'){
    return{
        counter: state.counter - 1,
        showCounter: state.showCounter
    };
 }

 if(action.type === 'toggle'){
    return{
        showCounter: !state.showCounter,
        counter: state.counter
    };
 }

 return state;
};

const store = configureStore({
    reducer: counterReducer
});

export default store;