import { Form, Radio, Switch,Checkbox,DatePicker,Modal,Message, Select,Input, Row, Col, Button } from 'antd'
const FormItem = Form.Item
const antdComponent = Form.create()(
    props => {
        const { getFieldDecorator,validateFieldsAndScroll, validateFields, setFieldsValue, resetFields,getFieldValue } = props.form
        const submit = () => {
            validateFieldsAndScroll((error,value)=>{ // 规则检查
                if(error===null) {
                    // ...
                }
            })
        }   
        return(
            <Form>
                {/* 文字输入框 */}
                <FormItem label={'问候主题'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
                    {getFieldDecorator(
                        `fieldName`, //form字段名
                        {
                            validateTrigger:'onBlur',
                            initialValue:props[`fieldName`]||'', 
                            rules:[
                                {required:true,message:'必填'},
                                {max:50,message:'长度不能超过50个字符'},
                            ]}
                    )(
                        <Input placeholder="本行文本显示于用户端"/>
                    )}
                </FormItem>
            </Form>
        )
    }
)