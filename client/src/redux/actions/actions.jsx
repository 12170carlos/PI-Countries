const {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_DETAIL,
    SET_LOADING,
    RESET_DETAIL,
    ADD_NEW_ACTIVITY,
    GET_ALL_REGIONS,
    GET_FILTERS,
    GET_FILTERS_CONTINENT,
    GET_FILTERS_ACTIVITY,
    GET_ORDER,
    SEARCH_BY_NAME,
    SET_ALL_COUNTRIES
}  = require('./actions_types')
const axios = require('axios');

const server = "http://localhost:3001";


export const setAllCountries = (payload) => {
    return {
        type: SET_ALL_COUNTRIES,
        payload,
    }
}

export const getCountries = () => {
    return async function (dispatch) {
        const { data } = await axios.get(`${server}/countries`);
        dispatch({
            type: GET_COUNTRIES,
            payload: data,
        })
    }
}

export const searchCountry = (input) => {
    return async function (dispatch) {
        try {
            
            const searchName = await axios.get(`${server}/countries?name=${input}`);
            dispatch({
              type: SEARCH_BY_NAME,
              payload: searchName.data,
            })
            
        } catch (error) {
            console.log(error)
        }
    }
  };


export const getByDetail = (id) => {
    return async function (dispatch) {
        try {
            
            let detail = await axios.get(`${server}/countries/${id}`);
           
            return dispatch({
                type: GET_DETAIL,
                payload: detail.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setLoading = (Boolean) => {
    return {
        type: SET_LOADING,
        payload: Boolean,
    }
}

export const resetDetail = () => {
    return {
      type: RESET_DETAIL,
    };
  };

export const newActivity = (input) => {

    return async function () {
        const response = await axios.post(`${server}/activities`, input);
        return response;
    }
}
export function getAllActivities () {
    return async function(dispatch){
        try {
            const act = await axios.get(`${server}/activities`);
            dispatch({
                type: GET_ACTIVITIES,
                payload:act.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getAllRegions () {
    return async function(dispatch) {
        try {
            const reg = await axios.get(`${server}/regions`);
            dispatch({
                type: GET_ALL_REGIONS,
                payload: reg.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getFilters(payload) {
	return  function(dispatch) {
		try {
			const res = axios.get(`${server}/regions`);
			dispatch({ type: GET_FILTERS, payload, res});
		} catch (err) {
			return console.error(err);
		}
	}
}

export const getOrder = (option) => {
    return {
      type: GET_ORDER,
      payload: option,
    };
  };
  
  export const filterByContinent = (payload) => {
    return {
      type: GET_FILTERS_CONTINENT,
      payload,
    };
  };
  export const filterByActivity = (payload) => {
    return {
      type: GET_FILTERS_ACTIVITY,
      payload,
    };
  };