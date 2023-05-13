import { GETCOUNTRIES, GET_COUNTRY_DETAIL, CLEANDETAIL, GET_COUNTRY_NAME } from "./types"

const initialState = {
    countries: [],
    countryDetail: {},
    countryCopy: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GETCOUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countryCopy: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        case CLEANDETAIL:
            return {
                ...state,
                countryDetail: {}
            }
        case GET_COUNTRY_NAME:
            let country = state.countryCopy.filter((e) => e.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state,
                countries: country
            };
        default:
            return { ...state }
    }
}

export default reducer;