import {COLLECT,UNCOLLECT} from "../constants/collect"

export function collect(data){
    return {
        type:COLLECT,
        data
    }
}

export function unCollect(data){
    return{
        type:UNCOLLECT,
        data
    }
}