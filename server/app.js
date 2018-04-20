var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var questionRouter = require('./routes/question');

var task = require('./service/get-answer-task');
var redisCache = require('./service/reids-cache');


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.use('/question', questionRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;


//启动定时任务
async function startTask_1() {
    await task("1");
}

//启动定时任务
async function startTask_2() {
    task("2");
}

//启动定时任务
async function startTask_3() {
    task("3");
}

//启动定时任务
async function startTask_4() {
    task("4");
}


setInterval(startTask_1, 1700);
setInterval(startTask_2, 1700);
setInterval(startTask_3, 1700);
setInterval(startTask_4, 1700);


// redisCache();







