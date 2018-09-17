import React from 'react'
const localObject = {}
localObject.inputElement={click(){ console.log('没有捕捉到上传组件') }}
localObject.onSelect = () => { console.log('没有捕捉到上传事件') }
class FileInputComponent extends React.Component { 
    constructor(props) {
        super(props)
        this.setInput = element => { localObject.inputElement = element }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        const file = e.target.files[0]
        localObject.onSelect(file)
        e.target.value = '' // 还原
    }
    render() {
        return (<input type="file" name="file" onChange={this.onChange} style={{display:'none'}} ref={this.setInput}/>)
    }
}
export default { 
    components: FileInputComponent, 
    open(callback){
        localObject.inputElement.click()
        localObject.onSelect = callback
    } 
}
/*
// 大小限制
if(file.size/1000000 > 30) {
    toast('文件大小必须小于30M',2000)
    e.target.value = ''
    return 
} 
// 格式限制 或者通过file.type
if(file.name.slice(-4)==='xlsx'||file.name.slice(-4)==='.xls'){
}else{
    message.error('请选择pdf格式的文件上传')
}
*/