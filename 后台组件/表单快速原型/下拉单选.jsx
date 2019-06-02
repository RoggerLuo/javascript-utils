<FormItem label={'发送时间'} wrapperCol={{span:6}} labelCol={{ span: 2 }}>
    {getFieldDecorator(
        'sendTimeType',
        {initialValue:props['sendTimeType']||'',rules:[
            {required:true,message:'必填'},
        ]}
    )(
        <Select 
            placeholder="请选择"
            onSelect={val=>{
                $.change('sendTimeType',val)
            }}
            value={props.sendTimeType}
        >
            {[
                {text:'定时发送',value:'TIMING'},
                {text:'员工生日当天发送',value:'BIRTH'},
                {text:'员工入职周年日发送',value:'WORK'},
            ].map((el,ind)=>{
                return <Select.Option key={ind} value={el.value}>{el.text}</Select.Option>
            })}
        </Select>
    )}
</FormItem>