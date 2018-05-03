import React from 'react'
import { Editor, EditorState, Modifier, ContentState, CompositeDecorator } from 'draft-js'
class MyEditor extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { editorState: EditorState.createEmpty()}
    }
    onChange(editorState) {
        this.setState({editorState}, () => {
            editorState = markdownHeader(editorState)
            this.setState({ editorState })
        })
    }
    render(){
        return <Editor editorState={this.state.editorState} onChange={this.onChange.bind(this)}/>
    }
}

export default MyEditor

const markdownHeader = (editorState) => {
    const contentState = editorState.getCurrentContent()
    const currentKey = contentState.getSelectionAfter().getAnchorKey()
    const block = contentState.getBlockForKey(currentKey)
    const { detector, unstyled } = factory(block,contentState,editorState)
    return detector('###','header-three') || 
        detector('##','header-two') || 
        detector('#','header-one') || 
        unstyled()
}

const factory = (block,contentState,editorState) => {
    return {
        detector(sign,type){
            if(block.getText().ltrim().indexOf(sign) === 0){
                if(block.getType() == type) {
                    return editorState
                }
                const selectionStateAfter = contentState.getSelectionAfter()
                const newContentState = Modifier.setBlockType(contentState,selectionStateAfter,type)
                const newEditorState = EditorState.push(editorState,newContentState,'adjust-depth')
                return newEditorState
            }else{
                return false
            }
        },
        unstyled(){
            if(block.getType() === 'unstyled') {
                return editorState
            }
            const selectionStateAfter = contentState.getSelectionAfter()
            const newContentState = Modifier.setBlockType(contentState,selectionStateAfter,'unstyled')
            const newEditorState = EditorState.push(editorState,newContentState,'adjust-depth')
            return newEditorState
        }
    }
}

String.prototype.ltrim = function()
{
     return this.replace(/(^\s*)/g,'');
}
