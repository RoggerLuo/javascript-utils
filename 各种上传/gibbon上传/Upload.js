import React from 'react'
import { connect } from 'dva'
import { Icon, Progress } from 'antd'
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
                description: (<Progress percent={0} strokeWidth={5} status="active" />),
                key:'my-react-notification'+i,
                className:'my-react-notification'+i
            })
        }
        const files = event.target.files // upload.js 针对普通文件上传
        for(let i=0;i<files.length;i++){
            const file = files[i]
            const formData = new FormData()
            formData.append('appId', this.props.currentAppId)
            formData.append('father', this.props.appDetail.father)
            formData.append('file', file)
            if(file.type.indexOf('/pdf')!= -1){
                formData.append('isPdf', true)
            }
            const randomN = Math.floor(Math.random()*100000+1)
            this.props.dispatch({type:'appDetail/uploadFile',formData,uploading,notiKey:'my-react-notification'+randomN})
            openNotification(file.name,randomN)   
        }     
        event.target.value = ''
    }
    render() {
        const uploadButton = (<div onClick={this.uploadClick}><Icon type="file-add" /> 上传普通文件</div>)        
        return (
            <div>
                {uploadButton}
                <input type="file" name="file" onChange={this.handleFileUpload} style={{display:'none'}} ref='upload' multiple/>
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
