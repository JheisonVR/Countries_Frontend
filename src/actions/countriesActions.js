import axios from 'axios';
export const GET_COUNTRIES = 'get/Country';

export function getCountries(value){
    return {
        type: GET_COUNTRIES,
        payload: value
    }
}

export const getCountriesList = ()=> async (dispatch)=> {
    try{
        await axios.get('/countries')
            .then(data => dispatch(getCountries(data.data)))
    }catch(e){
        console.log(e)
    }

}