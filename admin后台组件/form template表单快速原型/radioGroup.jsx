
            import { Radio } from 'antd'
            
            <Radio.Group onChange={e=>{
                const value = e.target.value
            }} value={props.value}>

                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
                
            </Radio.Group>