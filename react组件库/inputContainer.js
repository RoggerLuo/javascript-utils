import React from 'react'
import { connect, Model } from 'dvax'

export default (reducerName,View,fieldName,callback) => {
    const component = ({ value }) => {
        const onChange = (e) => {
            let val = e.target.value
            const oldValue = Model.get(reducerName)[fieldName] || ''
            if(callback) 
                val = callback(val,oldValue)
            Model.change(reducerName,fieldName,val)
        }
        return <View onChange={onChange} value={value}/>
    }
    const mapTo = (state) => {
        return { value: state[reducerName][fieldName] }
    } 
    return connect(mapTo)(component)
}

/* 使用方法 */ /* 使用方法 */ /* 使用方法 */ /* 使用方法 */ /* 使用方法 */
/* 使用方法 */ /* 使用方法 */ /* 使用方法 */ /* 使用方法 */ /* 使用方法 */

import React from 'react'
import { Model, connect } from 'dvax'
import inputContainer from './inputContainer'
Model.create({namespace:'upload'})

const InputView = ({value,onClick})=><input onClick={onClick} value={value}/>

const Title = inputContainer('upload',InputView,'title')
const Authors = inputContainer('upload',InputView,'authors')
const Keywords = inputContainer('upload',InputView,'keywords')

function Upload() {
    return (
        <div>
            <Title />
            <Authors />
            <Keywords />
        </div>
    )
}
export default connect()(Upload)
