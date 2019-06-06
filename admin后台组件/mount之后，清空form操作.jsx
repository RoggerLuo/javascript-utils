


表单的 componentDidMount 中要清空数据

const { getFieldDecorator,validateFieldsAndScroll, validateFields, setFieldsValue, resetFields,getFieldValue } = this.props.form
$.reduce(()=>({}))
resetFields()

为了清空数据还要用到initState来构建model，有些初始化数据不能清除
