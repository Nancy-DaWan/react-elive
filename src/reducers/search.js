import { UPDATEKEYWORDS } from "../constants/search"
const initstate = {}
export default function search(state = initstate,action){
    switch(action.type){
        case UPDATEKEYWORDS:
            return state = action.data;
        default:
            return state;
    }
}