import React from 'react'
import Transition from 'react-transition-group/Transition';

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  marginTop:'30px',
  display:'block'
}

const transitionStyles = {
  entering: { },
  entered:  { opacity: 1, marginTop:'0px' },
  exiting: { },
  exited: { display:'none'}
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);


class Example extends React.Component {
  constructor(){
      super()
      this.state = {
          show: false,
          entered: false,
      }

  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <div
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </div>
          <Transition
            in={show}
            timeout={300}
            unmountOnExit
          >
            {state => {


              return <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}>
                I'm a fade Transition!
              </div>


              switch (state) {
                case 'entering':
                  return 'Entering…';
                case 'entered':
                  return 'Entered!';
                case 'exiting':
                  return 'Exiting…';
                case 'exited':
                  return 'Exited!';
              }
            }}
          </Transition>
        </div>

    );
  }
}

export default Example

