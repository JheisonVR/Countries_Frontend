import axios from "axios"
export const GET_DETAIL_COUNTRY = 'get/CountryDetail'

export function getCountryDetail(value){
    return {
        type:GET_DETAIL_COUNTRY,
        payload:value
    }
}

export const fetchCuntryDetail = (id) => async (dispatch)=> {
    try{
        await axios.get(`/countries/${id}`)
            .then(data => dispatch(getCountryDetail(data.data)))
    }catch(e){
        console.log(e)
    }
}