import { httpGet,httpPost } from "../utils/http"
import base from "./base"

const api = {
    /**
     * 首页 热销产品
     */
    getHomehot1(cityName){
        return httpGet(base.baseUrl + base.homehot1 + "?city="+cityName);
    },
    /**
     * 首页 热门产品
     */
    getHomehot2(cityName){
        return httpGet(base.baseUrl + base.homehot2 + "?city="+cityName);
    },
    /**
     * 搜索接口
     */
    getSearch(keywords){
        return httpGet(base.baseUrl + base.search + "?q="+keywords);
    },

    /**
     * 详情页接口
     */
    getDetails(id){
        return httpGet(base.baseUrl + base.details + "?id=" + id);
    },

    /**
     * 详情 产品评价
     */
    getComment(id){
        return httpGet(base.baseUrl + base.comment + "?id=" + id);
    },
    /**
     * 购物车
     */
    getShopCar(user){
        return httpGet(base.baseUrl + base.shopcar + "?user="+user)
    },
    /**
     * 用户评价
     */
    setFeelBack(params){
        return httpPost(base.baseUrl + base.feelback,params);
    }
}

export default api