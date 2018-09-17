import React from 'react'
import styled from 'styled-components' 
// 没有设置高度，因为adjustHeight里面设置height了
const styleDefault = {
    resize:'none',
    overflow:'hidden',
    outline:'none'
}

class AdaptiveTextarea extends React.Component { 
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.adjustHeight = this.adjustHeight.bind(this)        
    }
    componentWillReceiveProps(){
        // 这一句会让页面上下跳 // this.adjustHeight() // 为了弥补setTimeout的动画不流畅
        setTimeout(()=>this.adjustHeight()) // 为了加载服务器数据的时候能够自动变化
    }
    adjustHeight(){
        const textarea = this.inputRef.current
        if(!textarea) return
        textarea.style.height = 'auto' //关键是先设置为auto，目的为了重设高度（如果字数减少）
        if(textarea.scrollHeight >= textarea.offsetHeight){ //如果高度不够，再重新设置
            textarea.style.height = textarea.scrollHeight - 12 + 'px' // 减去元素原来高度
        }
    }
    render() {
        return (<textarea 
            style={{...styleDefault,...this.props.style}}
            onChange={this.props.onChange} 
            onFocus={this.props.onFocus} 
            onBlur={this.props.onBlur}
            value={this.props.value||''} 
            placeholder={this.props.placeholder}
            rows="1" 
            ref={this.inputRef}
        />)
    }
}

export default AdaptiveTextarea
