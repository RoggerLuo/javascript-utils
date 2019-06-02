移动端弹出层上禁止页面滚动
2017年04月11日 15:17:08
阅读数：2775
再写移动端的时候经常会需要自己写一个弹框，但是弹框出现后会出现在弹框上还可以滚动整个页面，试过将body的overflow设置为hidden,但是在苹果手机跟一些安卓手机上无效，后来在网上看到一种直接用js 的方法，直接禁止滚动事件，很有效，代码如下，有需要的人可以拿去：

//实现滚动条无法滚动
var mo=function(e){e.preventDefault();};
function stop(){
        document.body.style.overflow='hidden';        
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
}
/***取消滑动限制***/
function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);        
}