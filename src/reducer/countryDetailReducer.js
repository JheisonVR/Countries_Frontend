import { GET_DETAIL_COUNTRY } from "../actions/countrieDetail";

const INITIAL_STATE = {
    countryDetail: []
}

export default function countryDetailReducer(state=INITIAL_STATE, {type,payload}) {
    switch(type){
        case GET_DETAIL_COUNTRY:{
            return{
                ...state,
                countryDetail:payload
            }
        }
        default: return state
    }
}