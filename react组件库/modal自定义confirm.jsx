import {Message,Modal,Icon} from 'antd'

Modal.confirm({
    icon:<Icon type="check-circle"></Icon>,
    title: '操作提醒',
    content: '问候已成功递送审核人。',
    okText: '去往列表',
    cancelText: '新建问候',
    onOk() {
        redirect(`/home/subject/add`)
        $.put({type:'clear'})
    },
    onCancel() {
        $.put({type:'clear'})
    },
})