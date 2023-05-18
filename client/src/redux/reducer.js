import { GETCOUNTRIES, GET_COUNTRY_DETAIL, CLEANDETAIL, GET_COUNTRY_NAME, POST_CREATE, ORDER_NAME, ORDER_POPULATION, FILTER_CONTINENTE, GET_ACTIVITY, FILTER_ACTIVITY } from "./types"

const initialState = {
    countries: [],
    countryDetail: {},
    countryCopy: [],
    activities: [],
    activitiesCopiy: [],
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
        case POST_CREATE:
            return {
                ...state,
            }
        case GET_ACTIVITY:
            return {
                ...state,
                activities: action.payload,
                activitiesCopiy: action.payload
            }
        case ORDER_NAME:
            let orderArr = action.payload === "asc" ?
                state.countryCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }) :
                state.countryCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderArr
            }
        case ORDER_POPULATION:
            let orderPop = action.payload === "menor" ?
                state.countryCopy.sort((a, b) => {
                    if (a.poblacion > b.poblacion) {
                        return 1
                    }
                    if (b.poblacion > a.poblacion) {
                        return -1
                    }
                    return 0;
                }) :
                state.countryCopy.sort((a, b) => {
                    if (a.poblacion > b.poblacion) {
                        return -1
                    }
                    if (b.poblacion > a.poblacion) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderPop
            }
        case FILTER_CONTINENTE:
            const allCountries = state.countryCopy
            const continentFileter = action.payload === "All" ? allCountries : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: continentFileter
            }
        case FILTER_ACTIVITY:
        const allCountry = state.countryCopy
        const allAct = []
            const  activityFileter = allCountry.forEach((e) => {
                if(e.activities.length > 0){
                    const act = e.activities.map(c => c.name === action.payload ? allAct.push(e) : null)
                }
            })
        return {
            ...state,
            countries: allAct
        }
        default:
            return { ...state }
    }
}

export default reducer;