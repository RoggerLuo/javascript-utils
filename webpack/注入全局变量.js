if(process.env.NODE_ENV==='production') {
    if(TEST_MODE) {
        api = '/'
    }else{ //生产
        api = '/bbs/v1/'//'http://120.236.169.14:9080/430edu-api/v1'
    }
}else{
    api = '/v1/'
}


basic.plugins = [
    new webpack.DefinePlugin({
      'TEST_MODE': JSON.stringify(false)
    })
]