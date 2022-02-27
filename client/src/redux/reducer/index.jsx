import { GET_ORDER } from "../actions/actions_types";

import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_ACTIVITIES,
    SET_LOADING,
    RESET_DETAIL,
    ADD_NEW_ACTIVITY,
    GET_ALL_REGIONS,
    SEARCH_BY_NAME,
    GET_FILTERS
} from "../actions/actions_types"
const initialState = {
    countries: [],
    allCountries: [],
    allActivities: [],
    allRegions: [],
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
        case SEARCH_BY_NAME:
            if (!action.payload.length) {
                return {
                ...state,
                allCountries: "WE CAN'T FOUND RESULTS, CHECK AGAIN",
                };
            } else {
                return {
                ...state,
                allCountries: action.payload,
                };
            }

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
        case GET_ALL_REGIONS:
            return {
                ...state,
                allRegions: action.payload
            }
        case ADD_NEW_ACTIVITY:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload]
            }
        case GET_FILTERS:
            const f = action.payload;
           
            const regionFiltered = f.region !== '' ? state.allCountries.filter(ele => ele.subregion.region.name.trim().toLowerCase() === f.region.trim().toLowerCase()) : [...state.allCountries];
            console.log("regionFiltered:", regionFiltered)
            const activityFiltered = f.activity !== '' ? state.allCountries.filter(ele => ele.activities.some(a =>a.name  === f.activity)) : [...state.allCountries];
            console.log("state.allCountries:", state.allCountries)
            const matches = [];
            
            for (let i = 0; i < regionFiltered.length; i++){
                for (let j = 0; j < activityFiltered.length; j++){
                    if (regionFiltered[i].id === activityFiltered[i].id){
                        matches.push(regionFiltered[i])
                    }
                }
            }

            if (f.order === 'a-z'){
                matches.sort((a,b) => a.name.localCompare(b.name));

            }
            else if (f.oredr === 'z-a') {
                matches.sort((a,b) => b.name.localCompare(a.name))
            }
            else if (f.order === 'population-lower') {
                matches.sort((a,b) => a.population - b.population)
            }
            else if (f.order === 'population-higer') {
                matches.sort((a,b) => b.population - a.population)
            }
            return {
                ...state,
                countries:matches

            }
            
    //     case GET_ORDER:
    //         let sorted = [...state.countries];
    //   let options = {
    //     "a-z": function (a, b) {
    //       return new Intl.Collator().compare(a.name, b.name);
    //     }, //equivale a LocalCompare pero para grandes matrices
    //     "z-a": function (a, b) {
    //       return new Intl.Collator().compare(b.name, a.name);
    //     },
    //     "population-lower": function (a, b) {
    //       return a.population - b.population;
    //     },
    //     "population-higer": function (a, b) {
    //       return b.population - a.population;
    //     },
    //   };
    //   sorted.sort((a, b) => options[action.payload](a, b));

    //   return {
    //     ...state,
    //     allCountries: sorted,
    //   };
          
          default:
            return state;
        }
        
    
    
}