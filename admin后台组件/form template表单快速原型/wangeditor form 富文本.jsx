<Row>
    <FormItem label={'商品详情'} wrapperCol={{span:18}} labelCol={{ span: 3 }}>
        {getFieldDecorator(
            `description`, //form字段名
            {
                validateTrigger:'onBlur',
                initialValue:props[`description`]||'', 
                rules:[
                    {required:true,message:'必填'},
                ]}
        )(
            <Input placeholder="" style={{display:'none'}} />
        )}
        <WangEditor setFieldsValue={(text,html)=>{
            setFieldsValue({'description':text})
            $.mutate(`description`,html)
        }} editMode={props.editMode} content={props.description}/>
    </FormItem>
</Row>