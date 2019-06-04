import Uploader from './Uploader'
<Uploader 
    updateFileList={images=>{
        Model.change('upload','images1',images)
        if(images.length===0) {
            setFieldsValue({image1:''})                            
            return
        }
        Model.change('upload','images1name',images[0].name)
        
        if(images[0] && images[0].response && images[0].response.mediaId) {
            Model.change('upload','image1',images[0].response.mediaId)
        }
        setFieldsValue({image1:'Input代替Uploader参与做校验'})
    }}
    fileList={props['images1']}
/>

