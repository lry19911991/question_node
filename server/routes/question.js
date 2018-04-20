var express = require('express');
var router = express.Router();
const redisCache = require('../service/reids-cache');
const logger = require('../service/logger');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const resData = await redisCache.getDataByType(req.query.appType)
    logger.info(JSON.parse(resData));
    res.json(JSON.parse(resData));
});

module.exports = router;
