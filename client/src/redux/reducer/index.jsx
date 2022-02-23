import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_ACTIVITIES,
    SET_LOADING,
    RESET_DETAIL,
    ADD_NEW_ACTIVITY
} from "../actions/actions_types"
const initialState = {
    countries: [],
    allCountries: [],
    allActivities: [],
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
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,

            }
        case ADD_NEW_ACTIVITY:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload]
            }
    
        default:
            return state
    }
    
    
}