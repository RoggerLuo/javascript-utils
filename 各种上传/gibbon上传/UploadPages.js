import React from 'react'
import { connect } from 'dva'
import { Icon, Progress, Message } from 'antd'
import { notification } from 'antd'


class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.handleFileUpload = this.handleFileUpload.bind(this)
        this.uploadClick = this.uploadClick.bind(this)
    }
    uploadClick(event) {
        let input = this.refs.upload
        input.click()
    }
    handleFileUpload(event) {
        if (!this.props.currentAppId) {
            alert('appId值丢失，请重新从PC端登录')
            this.props.dispatch({ type: 'common/change', key: 'login', value: false })
        }
        const uploading = (progress) => {
            this.props.dispatch({type:'appDetail/change',value:progress,key:'uploadProgress'})
        }
        const openNotification = (name,i) => {
            notification.open({
                message: (<div>{'正在上传文件:'+name}</div>),
                description: (<Progress percent={0} strokeWidth={5} status="active" />),  //( <div><i className="anticon anticon-spin anticon-loading" ></i> 正在处理中</div>),//
                key:'my-react-notification'+i,
                className:'my-react-notification'+i
            })
        }
        const files = event.target.files // uploadsPages.js 针对需求稿(zip格式的网页)的上传
        for(let i=0;i<files.length;i++){
            let file = files[i]
            const formData = new FormData()
            formData.append('appId', this.props.currentAppId)
            formData.append('father', this.props.appDetail.father)
            formData.append('file', file)
            formData.append('isPages', true)
            if(file.type.indexOf('zip')!= -1){
                const randomN = Math.floor(Math.random()*100000+1)
                openNotification(file.name,randomN)
                this.props.dispatch({type:'appDetail/uploadFile',formData,uploading,notiKey:'my-react-notification'+randomN})
            }else{
                Message.error('当前文件格式不符合，网页上传只接受zip打包文件')
            }
        }
        event.target.value = ''
    }
    render() {
        const uploadButton = (<div onClick={this.uploadClick}><Icon type="compass" /> 上传网页(zip包)</div>)
        return (
            <div>
                {uploadButton}
                <input type="file" name="file" onChange={this.handleFileUpload} style={{display:'none'}} ref='upload' multiple />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appDetail: state.appDetail,
        currentAppId: state.common.currentAppId,
    }
}

export default connect(mapStateToProps)(Upload)
