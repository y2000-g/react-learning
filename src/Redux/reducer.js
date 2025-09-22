import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
    count : 0
}

const counterReducer = (state = initialState, action)=>
{
    switch (action.type) {
        case INCREMENT:
            // console.log("Increment Action")
            return {...state, count: state.count+1}
         case DECREMENT:
            // console.log("Decrement Action")
            return {...state, count: state.count-1}
        default:
            return state
    }
}
export default counterReducer