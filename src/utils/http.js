import qs from "querystring"

export function httpGet(url){
    const result = fetch(url);
    return result;
}

export function httpPost(url,params){
    const result = fetch(url,{
        method:"post",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(params)
    })
    return result;
}