const express = require("express");
const router = express.Router();
const url = require("url");
const beijingHomehotData = require("./data/home/beijing_homehot")
const shanghaiHomehotData = require("./data/home/shanghai_homehot")
const searchData = require("./data/search")
const detailsData = require("./data/details")
const commentData = require("./data/comment")
const shopcarData = require("./data/shopcar")

/**
 * 首页  热门
 */
router.get("/homehot1",function(req,res){
    let city = url.parse(req.url,true).query.city;
    if(city === "北京"){
        res.send(beijingHomehotData.hot1)
    }else{
        res.send(shanghaiHomehotData.hot1)
    }
})

/**
 * 首页  热门
 */
router.get("/homehot2",function(req,res){
    let city = url.parse(req.url,true).query.city;
    if(city === "北京"){
        res.send(beijingHomehotData.hot2)
    }else{
        res.send(shanghaiHomehotData.hot2)
    }
})

/**
 * 搜索 搜索结果
 */
router.get("/search",function(req,res){
    let keywords = url.parse(req.url,true).query.q;
    console.log(keywords);
    res.send(searchData);
})

/**
 * 详情页 详情数据
 */
router.get("/details",function(req,res){
    let id = url.parse(req.url,true).query.id;
    console.log(id);
    res.send(detailsData);
})

/**
 * 房屋评价
 */
router.get("/comment",function(req,res){
    let id = url.parse(req.url,true).query.id;
    console.log(id);
    res.send(commentData);
})

/**
 * 购物车 列表接口
 */
router.get("/shopcar",function(req,res){
    let user = url.parse(req.url,true).query.user;
    console.log(user);
    res.send(shopcarData)
})

/**
 * 购物车 用户评价接口
 */
router.post("/feelback",function(req,res){
    const content = req.body.content;
    console.log(content);
    if(content){
        res.send({
            msg:"评价成功"
        })
    }else{
        res.send({
            msg:"评价失败"
        })
    }
})

module.exports = router;
