import React from "react"
import { Model } from 'dvax'
import { Form, Switch, Select,Input, Row, Col, Button } from 'antd'

Model.create({
    namespace:'amber',
    state:{tasks:[]},
    reducers:{
        add(state){
            const tasks = state.tasks.slice() // 克隆
            const obj = taskFactory()
            tasks.push(obj)
            return {...state,tasks} // 改变state
        }
    },
    effects:{
        * getData({get}){
            get().tasks.forEach(el=>{
                el.formObject.validateFields((error,value)=>{ // 规则检查
                    if(error===null) {
                        value = {...value}
                        console.log(value)
                    }
                })
            })
        }

    }
    
})
/* 
        const onSubmit = () => {
            validateFields((error,value)=>{ // 规则检查
                if(error===null) {
                    value = {...value}
                    console.log(value)
                }
            })
        }
 */
function taskFactory(){
    const formObject = {} 


    function Component({form}){
        const { getFieldDecorator, validateFields, setFieldsValue, resetFields } = form
        formObject.getFieldDecorator = getFieldDecorator 
        formObject.validateFields = validateFields 
        
        return (
            <Form>
                <Form.Item label={'课程名称'} wrapperCol={{span:20}} labelCol={{ span: 2 }}>
                    {
                        getFieldDecorator(
                            'courseName'
                        )(
                            <Input />
                        )
                    }
                </Form.Item>
            </Form>
        )
    }
    return {formObject,component: Form.create()(Component) }
}
const App = ({tasks}) => {
    return (
        <div>
            <div onClick={e=>Model.dispatch({type:'amber/add'})}>增加</div>
        {
            tasks.map((el,ind)=>{
                return <el.component key={ind}/>
            })
        }
                    <div onClick={e=>Model.dispatch({type:'amber/getData'})}>获得数据</div>

        </div>
    )
}
export default Model.connect('amber')(App)
