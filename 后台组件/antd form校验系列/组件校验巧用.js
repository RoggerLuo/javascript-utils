


RangePicker无法被fieldDecorator监听到，
利用setFieldsValue 和一个隐藏的<Input/>来 间接 实现校验，
数据存在model种

  <FormItem label={'出生日期'} wrapperCol={{span:6}} labelCol={{ span: 3 }}>
      {
          getFieldDecorator(
              'birthday',
              {
                  validateTrigger:'onBlur',
                  initialValue:props.reach.birthday||[],rules:[{required:true,message:'必填'}]}
          )(
             <Input style={{display:'none'}}/>
          )
      }
          <RangePicker
              onChange={val=>{
                  $.change('reach.birthday',val)
                  $.change('reach.birthBegin',val[0].unix()*1000)
                  $.change('reach.birthEnd',val[1].unix()*1000)
                  setFieldsValue({birthday:'aaa'})
              }}
              value={props.reach.birthday}
          />

  </FormItem> 