import React from 'react'
import { Upload, Icon, Modal,Message } from 'antd'
import {uploadMedia} from 'components/getMediaUrl'
class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        if(fileList.some(el=>{
            if(el.size > 500000){
                Message.warning(`图片“${el.name}”的大小不能超过500K`)
                return true
            }
        })) return
            
        if(fileList.some(el=>{
            if(!el.type) return false
            if(el.type.indexOf('png')===-1 && el.type.indexOf('jpeg')===-1) {
                Message.warning(`图片“${el.name}”的格式不对，请选择png或jpg的图片上传`)
            }
            return el.type.indexOf('png')===-1 && el.type.indexOf('jpeg')===-1
        })) return

        this.setState({ fileList })
        this.props.updateFileList && this.props.updateFileList(fileList)
        console.log(fileList)
    }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
            name='media'
            action={uploadMedia}
            listType="picture-card"
            fileList={this.props.fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
        >
          {this.props.fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export default PicturesWall