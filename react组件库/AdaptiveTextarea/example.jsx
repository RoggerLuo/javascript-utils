import React from 'react'
import { Model } from 'dvax'
import toast from 'dvax/toast'
import { workplus } from 'shared'
import AdaptiveTextarea from './AdaptiveTextarea'
import styled from 'styled-components'
const FooterComp = styled.div`
    display: flex;
    flex:1;
`
const textareaStyle = {
    "WebkitAppearance":"none",
    "padding":"5px 15px",
    "width":"100%",
    "height":"22px",
    "backgroundColor":"#f6f7f9",
    "border":"1px solid #e8e8e8",
    "borderRadius":"25px"   
}

function Footer({ avatar,data, paperId, name, inputText, run, get, open, close }) {
    const onChange = (e) => {
        if(e.target.value.length>=100) {
            toast('评论不能大于100个字',1000)
            return
        }
        Model.change('app','inputText',e.target.value)
    }
    return (
        <FooterComp>
            <AdaptiveTextarea
                style={textareaStyle}
                type={'text'}
                placeholder={'写评论...'}
                value={inputText||''}
                onChange={onChange}
                onFocus={open}
                onBlur={()=>setTimeout(close,300)}
            />
        </FooterComp> 
    )
}

export default Model.connect('app')(Footer)
