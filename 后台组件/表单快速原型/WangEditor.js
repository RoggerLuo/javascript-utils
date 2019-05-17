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
const $ = Model.assign('contentSteps')
export default $.connect()(class EditorApp extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.inputRef = React.createRef()
        this.toolbar = React.createRef()
        this.editor={}
    }
    componentDidMount() {
        const editor = new WangeEditor(this.toolbar.current,this.inputRef.current)
        this.editor = editor
        // this.inputRef.current.onchange=function(){}
        editor.customConfig.onchangeTimeout = 0
        // editor.customConfig.onfocus = function () {
        //     alert(1123)
        //     console.log("onfocus")
        // }
        editor.customConfig.onchange = html => {
            const text = editor.txt.text()
            if(text) {
                if(text.length > 200) {
                    message.warning('限制200个字符')
                    editor.txt.html(__html)
                    // editor.txt.html(Model.get('courseInfoDetail').detail||'')
                    return
                }    
            }
            __html = html
            $.change('contentText',text)
            $.change('content',html)
            console.log(html)
            this.props.setFieldsValue(text)
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
        let detail = $.get().content || ''

        // detail = detail.replaceAll('src="https://workplus.io/430edu/v1/miniprograms-medias/image/','src="/medias/')
        editor.txt.html(detail||'')

        if(this.props.readOnly||this.props.justView) {
            editor.$textElem.attr('contenteditable', false)
        }
        // setTimeout(()=>this.inputRef.current.blur(),1000)
    }
    render() {
        return (
            <EditorWrap>
                <div ref={this.toolbar}  style={{textAlign: 'left',width:'100%'}}></div>
                <div ref={this.inputRef}  style={{textAlign: 'left',height:'348px',width:'100%'}}></div>
                {!this.props.contentText? <div>
                    
                    <span style={{color:"#c1c1c1",    position: 'relative',bottom: '350px',left: '12px'}}>
                        文本字号及长度建议：<br/>
                        插入数值，可用large号字体。<br/>
                        
                    正文建议选用normal号字体，120-140字之间最佳。
                    <br/>
                    <span>
                        {`示例：亲爱的{姓名},今年是您入职第{入职周年数}年...`}
                    </span>

                    </span>

                    


                </div>:null}
            </EditorWrap>
        )
    }    
})