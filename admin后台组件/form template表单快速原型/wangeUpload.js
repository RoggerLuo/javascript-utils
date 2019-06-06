const url = '/medias/images'
export default editor => (files, insert) => {
    function handleResult(result){
        const mediaId = result.data.media.mediaId
        const imgUrl= '/medias/' + mediaId
        insert(imgUrl)
        editor.change()
    }
    files.forEach(file=>{
        const formData = new FormData()
        formData.append('media', file)
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With')
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
        xhr.send(formData)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 || xhr.status < 300 || xhr.status === 304) {
                    let result = JSON.parse(xhr.responseText)
                    handleResult(result)
                } else {
                    // reject(xhr.status)
                }
            }
        }
    })
}