{/* 富文本 */}
                <FormItem label={'内容编辑'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
                    
                    {getFieldDecorator(
                        'contentField',
                        {initialValue:props['contentField']||'',rules:[
                            {required:true,message:'必填'},
                        ]}
                    )(
                        <Input style={{display:'none'}} />
                    )}
                    <span>{`支持插入
                        {姓名}、
                        {生日日期}、
                        {入职日期}、
                        {入职周年数} 占位符`}
                    </span>
                    <br/>
                    <WangEditor setFieldsValue={text=>setFieldsValue({contentField:text})}/>
                </FormItem>