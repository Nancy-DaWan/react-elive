import { UPDATEKEYWORDS } from "../constants/search"

export function updateKeywords(data){
    return{
        type:UPDATEKEYWORDS,
        data
    }
}