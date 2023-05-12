import { GETCOUNTRIES, GET_COUNTRY_DETAIL, CLEANDETAIL } from "./types";
import axios from "axios";



 export const getCountries = () => {
    return async function (dispatch) {
        let info = await axios.get("http://localhost:3001/countries")
        return dispatch({
            type: GETCOUNTRIES,
            payload: info.data
        })
    }
}

export const getCountryDetail =  (id) => {
    return async function(dispatch){
         await axios(`http://localhost:3001/countries/${id}`)
        .then(response => response.data)
        .then(data => dispatch({ type: GET_COUNTRY_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return { type: CLEANDETAIL }
}




