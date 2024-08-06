import { FETCH, THEME } from "./actions";

const initialState = {
    theme:true
}

const reducer = ( state= initialState,action)=>{
    switch(action.type){
        case THEME:
            return {...state,theme:!theme}
        case FETCH:
            console.log("data from reducer", action.payload)
            return {...state,data:action.payload}
        default:
            return state;
        
    }
}


export default reducer