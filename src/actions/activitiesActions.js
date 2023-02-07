import axios from 'axios'
export const GET_ACTIVITIES = 'get/activities';
export const POST_ACTIVITIES = 'post/activities'

export function getActivities (value){
    return{
        type: GET_ACTIVITIES,
        payload: value
    }
}

export function postActivities (value){
    return{
        type:POST_ACTIVITIES,
        payload:value
    }
}

export const postFormActivities = (info)=> async (dispatch)=>{
    await axios.post(`/touristActivities`, info)
        .then(data => dispatch(postActivities(data.data)))
}

export const getAllActivities = ()=> async (dispatch) =>{
    await axios.get(`/touristActivities`)
        .then(act => dispatch(getActivities(act.data)))
}

