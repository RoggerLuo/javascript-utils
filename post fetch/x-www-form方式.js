/*

  x-www-form-urlencoded模式
  Codeigniter可以成功捕捉到
  python flask也可以捕捉到

*/

export function saveContent(item_id, content) {
    const data = new FormData()
    data.append("item_id", item_id)
    data.append("content", content)
    return fetch('/xxx', { method: "POST", body: data })
}

/*
    把js对象转换为x-www-form-urlencoded
*/
function xwwwformParser(body) {
    const postdata = new FormData()
    for (let k in body) {
        if (body.hasOwnProperty(k)) {
            postdata.append(k, body[k])
        }
    }
    return postdata
}
// ----------
const headers = 'Content-Type': 'application/x-www-form-urlencoded'
const body = "a=123&b=456"
fetch("/search/project", { method: "POST", headers, body })