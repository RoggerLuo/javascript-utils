


            {validator(rule, value, callback){
                if(Number(value) > 9999) {
                    callback('排序号不能超过9999')
                }else{
                    callback()
                }
            }}
