

{/* checkbox无法使用decorator */}
                <FormItem label={'发送方式'} wrapperCol={{span:6}} labelCol={{ span: 2 }}>                    
                    {getFieldDecorator(
                        'sendTypes',
                        {initialValue:props['sendTypes'],rules:[
                            {required:true,message:'必填'},
                        ]}
                    )(
                        <Switch />
                    )}

                </FormItem>