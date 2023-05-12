import { GETCOUNTRIES, GET_COUNTRY_DETAIL, CLEANDETAIL } from "./types"

const initialState = {
    countries: [],
    countryDetail: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GETCOUNTRIES:
            return {
                ...state,
                countries: action.payload
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
        



        default:
            return {...state}
    }
}

export default reducer;