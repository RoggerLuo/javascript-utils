import {Message,Modal} from 'antd'
const confirm = Modal.confirm
function showConfirm() {
    confirm({
        title: '删除',
        content: '删除操作成功后，该账号将不能再登录管理端，原操作记录保留',
        onOk() {
            return new Promise((resolve, reject) => {
                // Model.run()
                resolve()
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
    })
}
