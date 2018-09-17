import React from 'react'
class App extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {}
        this.inputRef = React.createRef()
        // this.onkeydown = this.onkeydown.bind(this)
    }
    onkeydown(event){
        const keyCode = event.keyCode
    }
    render() {
        return <input type="text" ref={this.inputRef} />
    }
}
