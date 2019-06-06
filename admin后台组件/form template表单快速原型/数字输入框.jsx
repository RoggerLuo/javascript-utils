
<FormItem label={'成本'} wrapperCol={{span:20}} labelCol={{ span: 3 }}>
    {
        getFieldDecorator(
            `${fieldName}.cost`,
            {
                validateTrigger:'onBlur',
                initialValue:props['cost']||0,rules:[
                    {required:true,message:'必填'}
                ]}
        )(
            <InputNumber min={0} placeholder="" precision={2}/>
        )
    }
</FormItem>
