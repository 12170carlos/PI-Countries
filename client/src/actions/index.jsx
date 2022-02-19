const {
    GET_COUNTRIES,
    GET_ACTIVITIES,
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
