import {GET_COUNTRIES} from '../actions/countriesActions'
import { CLEAN_FILTER, FILTER_COUNTRIES, SORT_COUNTRIESAZ, 
        SORT_COUNTRIESZA, SORT_CONTINENT, FILTER_ACTIVITY, 
        SORT_POPULATION_ZA, SORT_POPULATION_AZ } from '../actions/filterActions'

const INITIAL_STATE = {
    countries: [],
    filteredCountries: [],
    sortCountries:[]
}

export default function countriesReducer (state=INITIAL_STATE, {type,payload}){
    switch(type){
        case GET_COUNTRIES: {
            return{
                ...state,
                countries: payload
            }
        }
        case FILTER_COUNTRIES: {
            return{
                ...state,
                filteredCountries: payload.length > 0 ? payload : []
            }
        }
        case CLEAN_FILTER: {
            return{
                ...state,
                sortCountries:payload
            }
        }
        case SORT_COUNTRIESAZ: {
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        }
        case SORT_COUNTRIESZA: {
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        }
        case SORT_CONTINENT:{
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        }
        case FILTER_ACTIVITY:{
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        }
        case SORT_POPULATION_AZ:{
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        }
        case SORT_POPULATION_ZA:{
            return{
                ...state,
                countries:payload,
                sortCountries:payload
            }
        } 
        default: return state
    }
}
