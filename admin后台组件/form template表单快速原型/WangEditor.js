import {Model} from 'dvax'
import React from 'react'
import upload from './wangeUpload'
import WangeEditor from 'wangeditor'
import styled from 'styled-components'
import {message} from 'antd'
const EditorWrap = styled.div`
    width: 100%;
    height:400px;
    border: 1px solid #ccc;
`
let __html = ''
export default $ => {
    class EditorComponent extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.inputRef = React.createRef()
            this.toolbar = React.createRef()
            this.editor={}
        }
        componentDidMount() {
            const editor = new WangeEditor(this.toolbar.current,this.inputRef.current)
            this.editor = editor
            editor.customConfig.onchangeTimeout = 0
            editor.customConfig.onchange = html => {
                const text = editor.txt.text()
                if(text) {
                    if(text.length > 200) {
                        message.warning('限制200个字符')
                        editor.txt.html(__html)
                        return
                    }    
                }
                __html = html
                $.change('contentText',text)
                $.change('content',html)
                console.log(html)
                this.props.setFieldsValue(text,html)
            }
            editor.customConfig.customUploadImg = upload(editor)
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'strikeThrough',  // 删除线
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'list',  // 列表
                'justify',  // 对齐方式
                // 'quote',  // 引用
                // 'image',  // 插入图片
                // 'table',  // 表格
                // 'video',  // 插入视频
                // 'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            editor.create()
            let detail = this.props.content || ''
            editor.txt.html(detail||'')
        }
        render() {
            return (
                <EditorWrap>
                    <div ref={this.toolbar}  style={{textAlign: 'left',width:'100%'}}></div>
                    <div ref={this.inputRef}  style={{textAlign: 'left',height:'348px',width:'100%'}}></div>
                </EditorWrap>
            )
        }    
    }
    const Editor = $.connect()(EditorComponent)
    return function Wrap(props){
        // 新建模式
        if(!props.editMode) {
            return <Editor {...props}/>
        }
        // 编辑模式
        if(props.content === undefined) return null
        return <Editor {...props}/>
    }
    
}