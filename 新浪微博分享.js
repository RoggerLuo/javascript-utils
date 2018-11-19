1.在HTML标签中增加XML命名空间
<html xmlns:wb="http://open.weibo.com/wb">
2.在HEAD头中引入WB.JS
<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" type="text/javascript" charset="utf-8"></script>
    
function weiboShare(event){
    var wb_shareBtn = event.target//document.getElementById("shareBtn")
    const wb_url = document.URL, //获取当前页面地址，也可自定义例：wb_url = "http://liuyanzhao.com"
        wb_appkey = "3118689721",//你的app key
        wb_title = "",
        wb_ralateUid = "5936412667",//微博id，获得你的用户名
        wb_pic = "",
        wb_language = "zh_cn";
        open
    // window.open()
    const path = "http://service.weibo.com/share/share.php?url="+wb_url+"&appkey="+wb_appkey+"&title="+wb_title+"&pic="+wb_pic+"&ralateUid="+wb_ralateUid+"&language="+wb_language+""
    window.open(path,'shareWindow',`toolbar=0,status=0,resizable=1,width=440,height=430,left=${(screen.width - 440) / 2},top=${(screen.height - 430) / 2}`)
    //wb_shareBtn.setAttribute("href","http://service.weibo.com/share/share.php?url="+wb_url+"&appkey="+wb_appkey+"&title="+wb_title+"&pic="+wb_pic+"&ralateUid="+wb_ralateUid+"&language="+wb_language+"");
}