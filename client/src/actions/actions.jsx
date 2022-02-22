const {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_DETAIL,
    SET_LOADING,
    RESET_DETAIL,
    ADD_NEW_ACTIVITY
}  = require('./actions_types')
const axios = require('axios');

const server = "http://localhost:3001";

export const getCountries = () => {
    return async function (dispatch) {
        const country = await axios.get(`${server}/countries`);
        dispatch({
            type: GET_COUNTRIES,
            payload: country.data,
        })
    }
}

export const getByDetail = (id) => {
    return async function (dispatch) {
        try {
            
            let detail = await axios.get(`${server}/countries/${id}`);
            console.log("detail:", detail.data);
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