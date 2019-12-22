import { Route } from "react-router-dom";

const initState = {
    bros: []
}

const RootReducer = (state  = initState, action) => {
    if(action.type === "DELETE_BRO"){
        let newBros = state.bros.filter(bro => {
            return action.id !== bro.id
        });
        return {
            ...state,
            bros: newBros
        }
    }
    if(action.type === "ADD_BRO"){
        action.bro.id = Math.random()*10;
        return{
            ...state,
            bros: [...state.bros, action.bro]
        }
    }
    if(action.type === "INIT_BROS"){
        return{
            ...state,
            bros: action.bros
        }
    }
    return state;
}

export default RootReducer;