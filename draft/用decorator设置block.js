import React from 'react'
import { Editor, EditorState, Modifier, ContentState, CompositeDecorator } from 'draft-js'

const cs = ContentState.createFromText('#text\n##asdfasd\n###asdfasdf')

function headerStrategy(contentBlock, callback, contentState) {
    const text = contentBlock.getText()
    if(text.ltrim().indexOf('#') === 0){
      callback(1, text.length);
    }
}
function poundSignStrategy(contentBlock, callback) {
    const text = contentBlock.getText()
    if(text.ltrim().indexOf('#') === 0){
      callback(0, 1);
    }
}


const HeaderFirst = (props) => {
  return (<span style={{fontSize:'24px'}}  >{props.children}</span>)
};
//style={styles.handle}
const PoundSign = (props) => {
  return (<span style={{fontSize:'24px',color:'#ccc'}}  >{props.children}</span>)
};


class MyEditor extends React.Component {
    constructor(props) {
        super(props) 

        const compositeDecorator = new CompositeDecorator([
          {
            strategy: headerStrategy,
            component: HeaderFirst,
          },
          {
            strategy: poundSignStrategy,
            component: PoundSign,
          },

        ])

        this.state = { editorState: EditorState.createWithContent(cs,compositeDecorator) } 
    }
    onChange(editorState) {
        this.setState({editorState}, () => {})
    }
    render(){
        return <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)}/>
    }
}

export default MyEditor

String.prototype.ltrim = function()
{
     return this.replace(/(^\s*)/g,'');
}
