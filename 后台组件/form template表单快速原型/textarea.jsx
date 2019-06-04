            <FormItem label={'短信内容'} wrapperCol={{span:12}} labelCol={{ span: 3 }}>
                {
                    getFieldDecorator(
                        'emailContent',
                        {initialValue:props['emailContent']||'',rules:[
                            {required:false,message:'必填'},
                            {max:240,message:'长度不能超过240个字符'},

                        ]}
                    )(
                        <Input.TextArea autosize={{minRows: 3, maxRows: 6}}
                            placeholder="若不需要发送短信消息，可忽略本栏"
                        />
                    )
                }
            </FormItem>