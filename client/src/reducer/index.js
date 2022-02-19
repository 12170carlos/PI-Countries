import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
} from "../actions/actions_types"
const initialState = {
    allCountries: [],
} 

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries:action.payload,
            }
    
        default:
            return state
    }
    
    
}