import { GETCOUNTRIES, GET_COUNTRY_DETAIL, CLEANDETAIL, GET_COUNTRY_NAME, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENTE, GET_ACTIVITY, FILTER_ACTIVITY } from "./types";
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

export const getCountryDetail = (id) => {
    return async function (dispatch) {
        await axios(`http://localhost:3001/countries/${id}`)
            .then(response => response.data)
            .then(data => dispatch({ type: GET_COUNTRY_DETAIL, payload: data }))
    }
}

export const cleanDetail = () => {
    return { type: CLEANDETAIL }
}


export const getCountryName = (name) => {
    return { type: GET_COUNTRY_NAME, payload: name }
}

export const postActivity = (payload) => {
    return async function () {
        try {
            const response = await axios.post("http://localhost:3001/activities", payload)
            alert("activity Creado")
            return response
        } catch (error) {
            if (error.response.status === 400) {
                return alert(error.response.data.error)
            }
        }
    }
}
export const orderName = (payload) => {
    return { type: ORDER_NAME, payload }
}

export const orderPopulation = (payload) => {
    return { type: ORDER_POPULATION, payload }
}

export const filterContinente = (payload) => {
    return { type: FILTER_CONTINENTE, payload }
}

export const filterActiviti = (payload) => {
    return { type: FILTER_ACTIVITY, payload }
}

export const getActivity = () => {
    return async function (dispatch) {
        let info = await axios.get("http://localhost:3001/activities")
        return dispatch({
            type: GET_ACTIVITY,
            payload: info.data
        })
    }

}

export const hola = () => {
    return console.log({ hola: hola });
}


