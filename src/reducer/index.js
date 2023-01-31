import { combineReducers } from "redux";
import { SET_APP_IS_LOADING } from "../actions/appActions";
import countriesReducer from "./countryReducer";
import countryDetailReducer from "./countryDetailReducer";
import activitiesreducer from "./activitiesReducer";

const INITIAL_STATE = {
    isLoading:false
};


function appReducer (state=INITIAL_STATE, {type, payload}){
    switch(type){
        case SET_APP_IS_LOADING:{
            return {
                ...state,
                isLoading:payload
            }
        }
    default: return state
    }
};

export const rootReducer = combineReducers({
    app:appReducer,
    countries: countriesReducer,
    countryDetail:countryDetailReducer,
    activities:activitiesreducer
})