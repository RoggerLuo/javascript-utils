
//操作方法
uploadClick(event){
    // const keyCode = event.keyCode
    let input = this.refs.upload
    input.click()
}
handleFileUpload(event) {
    /* 文件在event.target.files[0]里面 */
    const file = event.target.files[0]
    /* 提交给service */
    this.props.dispatch({type:'appDetail/uploadFile',file})
}
// render
/*
    1.把input隐藏
    2.用另外的元素触发它的click
*/
return (
    <div>
        <div onClick={this.uploadClick}>display element</div>
        <input type="file" name="file" onChange={this.handleFileUpload} style={{display:'none'}} ref='upload'/>
    </div>

) 



//------service------
import { protocol_and_host } from '../config'
export function upload( file ) {
    /* 手动制造一个Promis */
    return new Promise(resolve => {
        const option = {
            url:protocol_and_host + '/detail/upload',
        } 
        /* 创建一个formdata,最后send这个formdata */
        const fd = new FormData()
        const xhr = new XMLHttpRequest()

        // if(!input.value){return;}
        // if(option.maxSize &&  input.files[0].size > option.maxSize * 1024 * 1024){
        //     dialog({
        //         title: '提示',
        //         content: '请上传小于'+option.maxSize+'M的文件',
        //         okValue: '确定',
        //         ok: function () {}
        //     }).showModal();
        //     return;
        // }
        // if(option.beforeSend instanceof Function){
        //     if(option.beforeSend(input) === false){
        //         return false;
        //     }
        // }
        fd.append('file', file);//input.files[0]
        xhr.open('post', option.url);
        
        xhr.onreadystatechange = function(){
            if(xhr.status == 200){
                if(xhr.readyState == 4){
                    console.log('success upload')
                    resolve(xhr.responseText)
                    // if(option.callback instanceof Function){
                    //     option.callback();
                    // }
                }
            }else{
                  console.log('success failed')

                // if(!(dialog.get('uploadfail'))){
                //     dialog({
                //         id: 'uploadfail',
                //         title: '提示',
                //         content: '上传失败',
                //         okValue: '确定',
                //         ok: function () {}
                //     }).showModal();
                // }
            }
        }
        // xhr.upload.onprogress = function(event){
        //     var pre = Math.floor(100 * event.loaded / event.total);
        //     if(option.uploading instanceof Function){
        //         option.uploading(pre);
        //     }
        // }
        xhr.send(fd);
    })

    // const data = { name: appName, description: appDes }
    // const options = { method: "POST", body: data }
    // return request(protocol_and_host + '/detail/upload', options)
    //     .then(function(data) {
    //         return data.results
    //     })
}

//-------- nodejs -------- 

/* 加一个中间层 */
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
router.post('/upload', 
    multipartMiddleware,
    detail_app.upload);

//---detail_app.upload---
/*
    1.文件在req.files.file里面 
    2.使用fs.rename转存
*/
const fs = require('fs')
function upload(req, res) {
    console.log('******uploaduploadupload********')
    console.log(req.body);
    console.log(req.files.file);

    /*相应客户端*/
    const client = HandleRes.getResFn(res);
    client.success('ok');

    /* 转存 */
    var inputFile = req.files.file
    var uploadedPath = inputFile.path;
    var dstPath = './uploadRepo/' + inputFile.originalFilename;
    //重命名为真实文件名
    fs.rename(uploadedPath, dstPath, function(err) {
      if(err){
        console.log('rename error: ' + err);
      } else {
        console.log('rename ok');
      }
    });
}
