

{/* checkbox无法使用decorator */}
                <FormItem label={'发送方式'} wrapperCol={{span:6}} labelCol={{ span: 2 }}>                    
                    {getFieldDecorator(
                        'sendTypes',
                        {initialValue:props['sendTypes'].join(',')||'',rules:[
                            {required:true,message:'必填'},
                        ]}
                    )(
                        <Input style={{display:'none'}}/>
                    )}


                    <Switch  onChange={checked=>{
                        $.change('sendTypes',[])
                        setFieldsValue({sendTypes:''})

                    }} checked={}/>

                </FormItem>