import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_ACTIVITIES,
    SET_LOADING,
    RESET_DETAIL
} from "../actions/actions_types"
const initialState = {
    countries: [],
    allCountries: [],
    detailed: {},
    loading: true,
} 

export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries:action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                detailed: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case RESET_DETAIL:
            return {
                ...state,
                detailed: {},
            }
    
        default:
            return state
    }
    
    
}