import { LOGIN } from "../constants/login"

export function login(data){
    return{
        type:LOGIN,
        data
    }
}