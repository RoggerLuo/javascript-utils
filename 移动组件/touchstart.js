
this.ref.addEventListener('touchstart', (event) => {
    if(this.flag) {
        this.props.edit(this.props.note)
        this.flag = false
    }else{
        this.flag = true
        setTimeout(()=>{this.flag=false}, 300) //长按时间超过800ms，则执行传入的方法                
    }
}, { passive: true })
