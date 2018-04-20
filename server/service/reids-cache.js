const redis = require("redis");
const logger = require('./logger');
var config = require('../config.json');
var redisconfig=config.redis

client = redis.createClient(redisconfig.port,redisconfig.host,{connect_timeout:1000});
client.auth(redisconfig.passwd, function () {
    console.log("redis")
});
//错误监听？
client.on("error", function (err) {
    console.log("Error " + err);
});

//redis 测试类
async  function  test() {
    //连接并设置超时

    client.set("string key", "string val", redis.print);//set "string key" "string val"
    client.get("string key",function(err,response){
        console.log(err,response); //will print lee
    });
    client.lpush("redis:demo:blpop",10,function(err,response){
        console.log(err,response);
    });
}


//取出队列最前面的值
 function getDataByKey(type){
     return new Promise(async resolve => {
         try {
             //获取 队列最开头元素
             client.lindex("redis:answer:key"+type,-1,function (err,response) {
                 resolve(response)
             })

         } catch (e) {
             logger.error(e.message)
             resolve(e.message)
         }
     })
}


//
function saveDataByKey(type,data){
    return new Promise(async resolve => {
        try {
            //lpush redis 队列
            client.lpush("redis:answer:key"+type,data,function(err,response){
                resolve(response)
            });
        } catch (e) {
            logger.error(e.message)
            resolve(e.message)
        }
    })
}



async  function  saveRedisData({type, data} = {}) {
    //连接并设置超时
    //取值
    let orinData=await getDataByKey(type);


    if(data==orinData){
        logger.info('值没变化 返回',type);
        return;
    }

    //保存值
    await saveDataByKey(type,data);
    client.ltrim("redis:answer:key",0,25);
    client.expire("redis:answer:key",6000);

}





module.exports = {

    //根据类型  保存答案到 redis 队列
    saveRedisData:async options=>{
        let res = await saveRedisData(options)
        return res;
    },
    //根据类型  取出redis 队列开始值
    getDataByType:async type=>{
        let res = await getDataByKey(type)
        return res;
    }
}