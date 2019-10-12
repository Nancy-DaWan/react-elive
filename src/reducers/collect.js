import {COLLECT,UNCOLLECT} from "../constants/collect"

export default function collect(state=[],action){
    switch(action.type){
        case COLLECT:
                state.push(action.data)
            return state;
        case UNCOLLECT:
            /**
             * state = [
             *  { id:'1231251435244'},
             *  { id:'1231251435244'},
             *  { id:'1231251435244'}
             * ]
             * 
             * {id:'1231251435244'}
             * 
             * filter:返回值仍然是一个新数组
             * redux的state问题！！！redxu中的state是不能直接操作的！！！
             * 
             * ES5的参考文档：http://javascript.ruanyifeng.com/
             * 
             * 数组常见方法：filter   every  some   reduce  map  for  foreach
             * 
             * 
             */
                return state.filter(function(item){
                    if(item.id != action.data.id){
                        return item;
                    }
                })
        default :
            return state;
    }
}