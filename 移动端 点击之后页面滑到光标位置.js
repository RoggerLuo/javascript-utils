$(`#${this.component._id}`).on('click', e => {
    
    let container = $('.launch-page-content'); //页面滚动条所在元素
    let scrollTo = $(`#${this.component._id}`); // textarea所在元素
    setTimeout(() => {
        let distance_areaToHeader = scrollTo.offset().top - scrollTo[0].scrollTop - 50  //50是header的高度
        container.scrollTop(container[0].scrollTop + distance_areaToHeader, 100);
    }, 500);
    //
    /*let textarea = $(`#${this.component._id}`);
    if (textarea[0].selectionStart == 0) {
        textarea[0].selectionStart = textarea.val().length;
        textarea[0].selectionEnd = textarea.val().length;
    }
    //好像有没有都无所谓
    */
    e.preventDefault()
    textarea[0].focus()
})

// 用setTimeout解决光标到后面不显示的问题，
$(`#${this.component._id}`).on('focus', () => {
    const val = $(`#${this.component._id}`).val()
    let textarea = $(`#${this.component._id}`);
    setTimeout(()=>{ //一定要用setTimeout
        $(`#${this.component._id}`).val('')
        $(`#${this.component._id}`).val(val)
        textarea.scrollTop(textarea[0].scrollHeight)
    })
});

