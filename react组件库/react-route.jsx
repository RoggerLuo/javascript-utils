import React from 'react'
import './style.css'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = ({ match }) => (
  <div>
    <pre><code>{`match.url: ${match.url}`}</code></pre>
    <pre><code>{`match.path: ${match.path}`}</code></pre>

    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>

    <h3>{"match.params.topicId: "}{match.params.topicId}</h3>

  </div>
)

const Topics = (props) =>{
    console.log(props)
    const match = props.match
    const location = props.location
    return (
      <div>
        <h2>Topics</h2>
        <pre><code>{`match.url: ${match.url}`}</code></pre>
        <pre><code>{`match.path: ${match.path}`}</code></pre>

        <ul>
          <li>
            <div onClick={()=>props.history.push('/about')}> 测试用内部history跳转(history.push) </div>
            <div onClick={()=>history.pushState({}, "页面标题", "/#/about") }> 测试用外部history跳转(history.push) </div>

            <Link to={`${match.url}/rendering`}>
                
                斜杆之后的url: "rendering" (测试从params中取值)

            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact path={match.path} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
} 

const BasicExample = () => (
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/topics">Topics(测试路由嵌套)</Link>
)

const BasicExample = () => (
  <Router>
    <div>
        <h2>{'Route test demo'}</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics(测试路由嵌套)</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

export default BasicExample
