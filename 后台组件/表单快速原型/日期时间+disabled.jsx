function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().startOf('day')
}


<FormItem label={'有效阶段'} wrapperCol={{span:6}} labelCol={{ span: 2 }}>
    {getFieldDecorator(
        'validDate',
        {initialValue:props['validDate']||'',rules:[
            {required:true,message:'必填'},
        ]}
    )(
        <Input style={{display:'none'}}/>
    )}                
    <DatePicker.RangePicker
        showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
        }}
        disabledDate={disabledDate}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={val=>{
            $.change('validDate',val)
            $.change('validBegin',val[0].unix()*1000)
            $.change('validEnd',val[1].unix()*1000)
            setFieldsValue({validDate:val[0].unix()*1000+'abc'})
        }}
        value={props.validDate}
    />
</FormItem>