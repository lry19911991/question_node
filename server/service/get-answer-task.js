const axios = require('axios');
const querystring = require('querystring');
const logger = require('./logger');
const redisCache = require('./reids-cache');

const origin = 'https://h-ss.sohu.com'



async  function  request(appType) {

    //构建请求头
    const request = axios.create({
        baseURL: origin,
        withCredentials: true,
        headers: {
            origin,
            referer: `${origin}/activity/million`,
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13G36 iphone sohuinfonews2_2_0',
            'cookie':'hjstat_uv=6801578893205276448|679544; vjuids=8616b640a.15e36151dfc.0.d7181ad43fed9; vjlast=1504145907.1507955365.23; shenhui12=w:1; sohutag=8HsmeSc5NCwmcyc5NCwmYjc5NCwmYSc5NSwmZjc5NCwmZyc5NCwmbjc5NSwmaSc5NCwmdyc5NCwmaCc5NCwmYyc5NCwmZSc5NCwmbSc5NCwmdCc5NH0; IPLOC=CN3100; SUV=1704071406241419; debug_test=sohu_third_cookie; Hm_lvt_32b54343ac4b0930095e3ad0ae71c49e=1516961348; Hm_lpvt_32b54343ac4b0930095e3ad0ae71c49e=1517153164',
            'accept':"*/*",
            "authority": "h-ss.sohu.com",
            "method": "POST",
            "content-type": "application/json;charset=UTF-8",
            "dnt":"1",
            "path": "/hotspot/millionHero/getQuestion"
        }
    })

    return (async function get () {

        //获取答案
        const originData = await request.post(`https://h-ss.sohu.com/hotspot/millionHero/getQuestion`,"{\"appType\":"+appType+"}")
        const  logData=JSON.stringify(originData.data.data);
        logger.info(`appType: ${appType} data: ${logData}`);
        // console.dir(data.data.data);
        const  data=JSON.stringify(originData.data.data);

        const type=appType;

        //根据问题类型和 答题数据 保存数据到redis 队列中
        await redisCache.saveRedisData({type,data});

    })()

    
}




module.exports = async options => {
    let res = await request(options)
    return res
}