import React from "react"
import styled from 'styled-components'
//import { openAddTag } from './detail'
import { Row,Col,Input, Form, Button, Modal,Message } from 'antd'
import { Model } from 'dvax'
import moment from 'moment'
const Search = Input.Search
const FormItem = Form.Item
Model.create({
    namespace: 'productmainEdit',
    state: {
    }  
})
const $ = Model.assign('productmainEdit')
export const bridge = {} // 利用作用域和引用传递来传递数据

const AddForm = Model.connect(['productmainEdit'])(Form.create()(
    ({ form, submit,...props }) => {
        const { getFieldDecorator,validateFieldsAndScroll, validateFields, setFieldsValue, resetFields } = form
        const onSubmit = () => {
            validateFieldsAndScroll((error,value)=>{ // 规则检查
                if(error===null) {
                    // value = {...value}
                    // submit(value)    
                    $.run(function*({fetch}){
                        const body = $.get()
                        body.id=body.productId
                        const res = yield fetch(`admin/main-products`,{method:'post',body})
                        if(res.status=== "0") {
                            bridge.handleCancel()
                            Message.success('添加成功')
                        }
                    })
                }
            })
        }
        return(
            <Form>
                <FormItem label={'产品名称'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
                    {
                        getFieldDecorator(
                            'name',
                            {
                                validateTrigger:'onBlur',
                                initialValue:props['name']||'',rules:[{max:200,required:true,message:'必填',whitespace:true}]}
                        )(
                            <Input placeholder="" onChange={e=>$.change('name',e.target.value)}/>
                        )
                    }
                </FormItem>
                <FormItem label={'产品型号'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
                    {
                        getFieldDecorator(
                            'model',
                            {
                                validateTrigger:'onBlur',
                                initialValue:props['model']||'',rules:[{max:200,required:true,message:'必填',whitespace:true}]}
                        )(
                            <Input placeholder="" onChange={e=>$.change('model',e.target.value)} />
                        )
                    }
                </FormItem>
                <FormItem label={'装箱数'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
                    {
                        getFieldDecorator(
                            'packageQuantity',
                            {
                                validateTrigger:'onBlur',
                                initialValue: String(props['packageQuantity']||"")||'',
                                rules:[
                                    {max:200,required:true,message:'必填',whitespace:true},
                                    {pattern:/^[0-9]+$/,message:'只能输入整数'}
                                ]}
                        )(
                            <Input placeholder="" onChange={e=>$.change('packageQuantity',e.target.value)} />
                        )
                    }
                </FormItem>
                <div style={{height:'30px'}}></div>
                <Row style={{marginBottom:'15px'}}>
                    <Col span={2} offset={3}>
                        {(()=>{
                            return <Button onClick={()=>{
                                bridge.handleCancel()
                            }} loading={false} size="large" style={{width:'150px',}}> 取消 </Button>
                        })()}
                    </Col>
                    <Col span={2} offset={11}>
                        {(()=>{
                            return <Button onClick={()=>{
                                // $.change('currentStep',4)
                                onSubmit()
                            }} loading={false} type="primary" size="large" style={{width:'150px',border:'none'}}> 确定 </Button>
                        })()}
                    </Col>
                </Row>
            </Form>
        )
    }
))
export default class CreateModal extends React.Component {
    constructor(props){
        super(props)
        this.title = '添加主产品'
        this.state = { visible: false, remark:'' }
    }
    showModal = record => {
        if(record) {
            $.reduce(state=>record)
        }
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        const self = this
        $.run(function*({fetch}){
            const body = {
                'remark':self.state.remark,
                'correlationId':self.props.correlationId,
                'state':self.state.pass?'PASS':'REJECT'
            }
            const res = yield fetch(`auth/${self.props.id}`,{method:'post',body})
            if(res.hasErrors) return 
            self.setState({
                visible: false,
            })
            $.dispatch({type:'get'})
        }) 
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        bridge.showModal=this.showModal
        bridge.handleCancel=this.handleCancel
        return (
        <div>
            <Modal
                width={800}
                title={this.title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={false}
                className="page-modal"
            >
                <div>
                    <AddForm/>
                </div>
            </Modal>
        </div>
        );
    }
}