### 第一个点，使用原生input的type="file"
<input type="file" name="file" onChange={this.onChange} style={{display:'none'}} ref={this.inputRef}/>

###  第二个点,用它的onChange方法
onChange(e){
    const file = e.target.files[0]
    if(file) Model.dispatch({ type:'upload/upload', file })
    e.target.value = ''
}

### 第三，样式调整
用style={{display:'none'}}隐藏原生，再写一个视图按钮，调用input的引用，手动触发click


### 第四 如果使用fetch
const body = new FormData()
body.append('file', file)
记得改content-type
"Content-Type": "multipart/form-data",
