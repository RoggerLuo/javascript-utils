
window.workplus = { exec : function(success,fail,className,actionName,options,times,startingTime){
    var waitingTime = 1000;
    if(actionName === 'getLocation') {
        waitingTime = 3000;
    }
    if(startingTime === undefined) {
        startingTime = Date.now();
    }
    if(times === undefined) {
        times = 0;
    }
    if(times >= 3) {
        fail('cordova has no response after retry 3 times');
        return
    }
    var timer = setTimeout(function(){
        times += 1;
        window.workplus.exec(success,fail,className,actionName,options,times,startingTime);
    },waitingTime);
    if(window.cordova) {
        cordova.exec(
            function(result) {
                var distance = Date.now() - startingTime;
                // alert('cordova执行【成功】回调，耗时:'+distance+'毫秒');
                window.clearTimeout(timer);
                success(result);
            },
            function(error) {
                var distance = Date.now() - startingTime;
                // alert('cordova执行【失败】回调，耗时:'+distance+'毫秒');
                window.clearTimeout(timer);
                fail(error);
            },
            className,
            actionName,
            options
        );
    }else{
       console.log("cordova doesn't exist");
    }
}};
