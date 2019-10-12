import { INITCITY,UPDATECITY } from "../constants/city"
const initstate = {}
export default function city(state = initstate,action){
    switch(action.type){
        case INITCITY:
            return state = action.data;
        case UPDATECITY:
            return state = action.data;
        default:
            return state;
    }
}