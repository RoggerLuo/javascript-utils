import Uploader from './Uploader'




data._images = data.images.map(el=>{
    return {
        uid:el,
        name:el+'.png',
        status:'done',
        response:{data:{mediaId:el}},
        thumbUrl:`${constants.SERVER_URL_WITH_ROLE}medias/${el}`
    }
})    


<Uploader 
    updateFileList={images=>{
        $.mutate('formData.images',images)
        if(images[0] && images[0].response && images[0].response.data.mediaId) {
            setFieldsValue({icon:images[0].response.data.mediaId})
        }else{
            setFieldsValue({icon:''})
        }
    }}
    fileList={props.formData['images']||[]}
/>

