import { GET_ACTIVITIES } from "../actions/activitiesActions";

const INITIAL_STATE = {
    touristActivities : []
}

export default function activitiesreducer(state=INITIAL_STATE, {type,payload}){
    switch(type){
        // case POST_ACTIVITIES:{
        //     return{
        //         ...state,
        //         touristActivities:[...state.concat(payload)]
        //     }
        // }
        case GET_ACTIVITIES:{
            return{
                ...state,
                touristActivities:payload
            }
        }
        default: return state
    }
}