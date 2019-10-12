import { combineReducers } from "redux"
import city from "./city"
import search from "./search"
import login from "./login"
import collect from "./collect"

const rootReducers = combineReducers({
    city,
    search,
    login,
    collect
})

export default rootReducers