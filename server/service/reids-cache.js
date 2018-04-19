const redis = require("redis");


//redis 测试类
async  function  test() {
    //连接并设置超时
    client = redis.createClient(6379,'192.168.10.46',{connect_timeout:1000});
    client.auth("redis", function () {
        console.log("redis")
    });
//错误监听？
    client.on("error", function (err) {
        console.log("Error " + err);
    });

    client.set("string key", "string val", redis.print);//set "string key" "string val"
    client.get("string key",function(err,response){
        console.log(err,response); //will print lee
    });
    client.blpop("roban:demo:blpop",10,function(err,response){
        console.log(err,response);
    });
}





//redis 测试类
async  function  test() {
    //连接并设置超时
    client = redis.createClient(6379,'192.168.10.46',{connect_timeout:1000});
    client.auth("redis", function () {
        console.log("redis")
    });
//错误监听？
    client.on("error", function (err) {
        console.log("Error " + err);
    });

    client.set("string key", "string val", redis.print);//set "string key" "string val"
    client.get("string key",function(err,response){
        console.log(err,response); //will print lee
    });
    client.blpop("roban:demo:blpop",10,function(err,response){
        console.log(err,response);
    });
}





module.exports = async options => {
    let res = await test(options)
    return res
}