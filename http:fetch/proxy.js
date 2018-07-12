var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var fs = require('fs');

//创建express实例
var app = express();
var port = 9001;

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With,Content-Length,Authorization,Accept,Cookie,Cache-Control,Pragma,expire-day");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next()
})

const proxy = httpProxy.createProxyServer({
    target:'http://172.16.1.25:8880/activiti'
})

proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('from', 'admin')
    proxyReq.setHeader('Accept', 'application/json')
    proxyReq.setHeader("Authorization", "Bearer 4656c79b5b994cdcb1d0a79b39576c0a")
    proxyReq.setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
})

app.use(function(req, res, next) {
    /* 改host */
    req.headers.host = '172.16.1.25:8880'
    // 只代理特定的url，
    if (req.url.indexOf('work_plus') > -1 || req.url.indexOf('login') > -1 || req.url.indexOf('accounts') > -1 || req.url.indexOf('files') > -1) {
        proxy.web(req, res)
        console.log(req.url)
    }
})

app.listen(process.env.PORT || port);
console.log('Show Time!');
console.log('Listening Port:' + port);
