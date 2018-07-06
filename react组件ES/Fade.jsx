import React from 'react'
import Transition from 'react-transition-group/Transition';
const Fade = ({ show, duration, distance, children }) => (
    const marginTop = distance || '0px'
    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        marginTop
    }
    const transitionStyles = {
        entering: {},
        entered:  { opacity: 1, marginTop:'0px' },
        exiting: {},
        exited: {}
    }
    const style = state => ({...defaultStyle,...transitionStyles[state]})
    <Transition in={show} timeout={duration}>
        {state => (
            <div style={style(state)}>
                {children}
            </div>
        )}
    </Transition>
)
export default Fade
