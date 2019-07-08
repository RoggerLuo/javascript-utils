var http = require('http');
// 创建http服务
var app = http.createServer(function (req, res) {
    // 查询本机ip
    var sreq = http.request({
        host:     'sneezryworks.sinaapp.com', // 目标主机
        path:     '/ip.php', // 目标路径
        method:   req.method // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
// 访问127.0.0.1:3001查看效果
app.listen(3001);
console.log('server started on 127.0.0.1:3001');



//博客地址
"https://cnodejs.org/topic/5583de7501d3ce0d73d68f36"