import {Alert,Row,Col} from 'antd'
function NotFound(){
    return (<div>
        <Alert
            message="页面没找到"
            description="可能输入了错误的url"
            type="warning"
            showIcon
        />
        <br/>
        <Row>
            <Col offset={1} span={1}>
                <a onClick={()=>window.history.back()}>返回</a>
            </Col>
            <Col offset={0} span={2}>
                <a href="#/login">回到登录页</a>
            </Col>
        </Row>
    </div>) 
}