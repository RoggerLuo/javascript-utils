Codeigniter可以成功捕捉到
应该是一个标准的规范

export function saveContent(item_id, content) {

    var data = new FormData()
    
    var payload = {
        content,
        item_id
    }
    
    data.append("json", JSON.stringify(payload))
    
    return (dispatch, getState) => {
        return fetch('http://xxx/item_saveContent', { method: "POST", body: data })
    }
}
