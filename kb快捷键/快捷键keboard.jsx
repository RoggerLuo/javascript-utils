import React from 'react'
import { IndexLink, Link, withRouter } from 'react-router'
import './Header.scss'
import { connect } from 'react-redux'
import { cleanAll,fetchSearchResult, saveContent, fetchSearchPageData ,createNew} from '../../routes/commonActions'

/* 
    this.props.fetchResult和fetchResult 区别很大，特别是es6import写法
    这里引用的thunk不能直接使用，
    一定要通过mapDispatchToProps connect到redux,
    如果要直接使用fetch逻辑的函数，
    那就不能写成thunk
 */

const ctrl_or_command = ({ctrlKey,metaKey,keyCode},keycode,callback)=>{
    if((ctrlKey||metaKey)&&(keyCode==keycode)){ 
        callback();
    }
}
function getCursortPosition (textDom) {
 var cursorPos = 0;
 if (document.selection) {
  // IE Support
  textDom.focus ();
  var selectRange = document.selection.createRange();
  selectRange.moveStart ('character', -textDom.value.length);
  cursorPos = selectRange.text.length;
 }else if (textDom.selectionStart || textDom.selectionStart == '0') {
  // Firefox support
  cursorPos = textDom.selectionStart;
 }
 return cursorPos;
}

// 设置光标位置
function setCaretPosition(textDom, pos){
 if(textDom.setSelectionRange) {
  // IE Support
  textDom.focus();
  textDom.setSelectionRange(pos, pos);
 }else if (textDom.createTextRange) {
  // Firefox support
  var range = textDom.createTextRange();
  range.collapse(true);
  range.moveEnd('character', pos);
  range.moveStart('character', pos);
  range.select();
 }
}

export class Header extends React.Component { 
    constructor(props) {
        super(props)
        this.onEdit = this.onEdit.bind(this)
        this.onkeydown = this.onkeydown.bind(this)
        this.item_id = 'new'
    }
    onkeydown(event){
        const ctrlKey = event.ctrlKey
        const metaKey = event.metaKey
        const keyCode = event.keyCode

        const cleanAll = this.props.cleanAll
        const search = this.props.fetchSearchResult
        const route = this.props.router
        const that = this

        ctrl_or_command({ctrlKey,metaKey,keyCode},73,function(){ //ctrl + i
            // console.log(getCursortPosition(that.refs.myTA))
            let string = event.target.value
            let numOfn = 0
            for (var i = 0; i < string.length; i++) {
                if(string[i] == '\n'){
                    numOfn += 1
                }
            }
            let total = numOfn

/*          现在的位置
            开始到现在的位置有几个\n
            最后一个\n的位置是什么
            计算出距离这一行开头的距离是多远, startOfThisLine

            然后倒数第二个\n的位置是多少
            倒数第二个\n的位置 + startOfThisLine = 我按一下ctrl+i光标应该到的位置

            input:输入现在的位置、整个字符串
            output:输出按up的时候光标应该到达的位置

            写博客
*/

            // let pos 
            // setCaretPosition(that.refs.myTA,pos)
        })

        ctrl_or_command({ctrlKey,metaKey,keyCode},78,function(){
            /* 保存 */
            if(that.item_id != 'new'){
                if(event.target.value!=''){
                    that.props.saveContent(that.item_id,event.target.value)
                }                
            }
            if(that.item_id == 'new'){ //如果为new 说明是最开始 一进来
                if(event.target.value!=''){
                    that.item_id = Date.parse(new Date())/1000
                    that.props.createNew(that.item_id,event.target.value)
                }
            }
            /* 新建 */
            that.item_id = 'new'
            that.refs.myTA.value = ''
            event.preventDefault()
        })

        ctrl_or_command({ctrlKey,metaKey,keyCode},83,function(){
            /* 保存 */
            if(that.item_id != 'new'){
                if(event.target.value!=''){
                    that.props.saveContent(that.item_id,event.target.value)
                }                
            }
            if(that.item_id == 'new'){ //如果为new 说明是最开始 一进来
                if(event.target.value!=''){
                    that.item_id = Date.parse(new Date())/1000
                    that.props.createNew(that.item_id,event.target.value)
                }
            }
            event.preventDefault()
        })

        ctrl_or_command({ctrlKey,metaKey,keyCode},13,function(){
            if(event.target.value!=''){
                search(event.target.value)  
            }
            route.push({pathname:'/',query:{test:'tttest'}})
        })

        ctrl_or_command({ctrlKey,metaKey,keyCode},75,function(){
            route.push('/RandomKW')
        })

        ctrl_or_command({ctrlKey,metaKey,keyCode},68,function(){
            cleanAll()
            event.preventDefault()
        })

        if(keyCode==27){
            route.goBack()
        }
    }

    onEdit(){
        //先设置为auto，目的为了重设高度（如果字数减少）
        this.refs.myTA.style.height = 'auto';  
        if(this.refs.myTA.scrollHeight >= this.refs.myTA.offsetHeight){
            this.refs.myTA.style.height = this.refs.myTA.scrollHeight + 'px'
        }
    }
    
    render(){
        return (
            <div>
              <div className="todoapp">
                  <textarea onKeyDown={this.onkeydown} onChange={this.onEdit} rows="1" ref="myTA" className="new-todo" placeholder="What needs to be done?" ></textarea>
              </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchSearchResult,saveContent,createNew,cleanAll
}

const mapStateToProps = (state) => ({
    header: state.header
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))

