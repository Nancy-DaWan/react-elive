const express = require("express");
const app = express();
const router = require("./router")
const bodyParser = require("body-parser");
const debug = require('debug')('my-application');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/api",router);

app.listen(3200,function(){
    // 当程序重新渲染的时候，这里可以直接打新渲染信息
    debug('Express server listening on port ' + 3000);
})