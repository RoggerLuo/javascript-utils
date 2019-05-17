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
                    <Checkbox 
                        checked={props['sendTypes'].length ===3}
                        onChange={e=>{
                            if(props['sendTypes'].length === 3) {
                                $.change('sendTypes',[])
                                setFieldsValue({sendTypes:''})
                            }else{
                                $.change('sendTypes',["EMAIL",'KK','SMS'])
                                setFieldsValue({sendTypes:'all'})
                            }
                        }}
                    > 全部&nbsp; </Checkbox>
                </FormItem>