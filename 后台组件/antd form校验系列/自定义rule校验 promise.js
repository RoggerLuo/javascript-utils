  


            {validator(rule, value, callback){
                $.run(function*({fetch}){
                    const res  = yield fetch(`admin/products/has-productsn`,{query:{productId:'',productSn:value}})
                    if(res.status===1) {
                        callback()
                        return 
                    }
                    if(res.data.hasProductSn===true) {
                        callback('产品编号已经存在')
                    }
                    callback()
                })
            }}


