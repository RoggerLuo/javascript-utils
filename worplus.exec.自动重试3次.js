
window.workplus = { exec : function(success,fail,className,actionName,options,times){
    if(times === undefined) {
        times = 0;
    }
    if(times >= 3) {
        fail('cordova has no response after retry 3 times');
        return
    }
    var timer = setTimeout(function(){
        times += 1;
        window.workplus.exec(success,fail,className,actionName,options,times);
    },3000);
    if(window.cordova) {
        cordova.exec(
            function(result) {
                window.clearTimeout(timer);
                success(result);
            },
            function(error) {
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
