function debounce(fn, delay) {
    var timer = null
    return function() {
        var context = this,
            args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}
class SearchBox extends React.Component {
        constructor(props) {
            super(props)
            this.onchange = debounce(this.onchange, 1500)
            this.onchange = this.onchange.bind(this)
        }
        onchange(e) {
            console.log(this.refs.search.value)
        }
        render() {
            return ( <div >
                <input ref = "search"
                onInput = { this.onchange } type = "text"
                style = { { width: '100%', height: '40px', lineHeight: '40px', fontSize: '16px', outline: 'none' } }
                /> </div>)
            }
        }