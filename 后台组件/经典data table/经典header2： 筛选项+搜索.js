import React from "react"
import styled from 'styled-components'
import { openAddTag } from './detail'
import { Input, Form, Select } from 'antd'
import {Model} from "dvax"
const Search = Input.Search

const SearchRow = styled.div`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content:space-between;
    alignItems:start;
`
const AddButton = styled.div`
  color: white;
  padding: 8px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 36px;
  background: #576ff8;
  cursor: pointer;
  width: 116px;
  height: 36px;
  margin-left:20px;
`
const $ = Model.assign('currrent')
function Header(props){
    return (
        <SearchRow>          
            <div style={{display:'flex'}}>
                <Select
                    onChange={(value)=>{        // onchange
                        $.change('query.time',value||'')
                        $.put({type:'get'})
                    }}
                    placeholder={'年度'}    //placeholder
                    style={{ width: '150px' }}
                    allowClear
                >
                    {             // data source
                        [
                            {text:'不限年度',value:''},
                            {text:'2019',value:'2019'},
                            {text:'2020',value:'2020'},
                        ]
                        .map((el,ind)=>(
                            <Select.Option 
                                value={el.value}  // value key
                            key={ind}>
                                {el.text}       {/* text key */}
                            </Select.Option>
                        )
                    )}
                </Select>
                &nbsp;&nbsp;
                <Select
                    onChange={(value)=>{        // onchange
                        $.change('query.categoryId',value||'')
                        $.put({type:'get'})
                    }}
                    placeholder={'问候类别'}    //placeholder
                    style={{ width: '150px' }}
                    allowClear
                >
                    {             // data source
                        [...props.categoryData,{id:-1,name:'未分类'}].map((el,ind)=>(
                            <Select.Option 
                                value={el.id}  // value key
                            key={ind}>
                                {el.name}       {/* text key */}
                            </Select.Option>
                        )
                    )}
                </Select>
                &nbsp;&nbsp;

                <Select
                    onChange={(value)=>{        // onchange
                        $.change('query.order',value||'')
                        $.put({type:'get'})
                    }}
                    placeholder={'排序方式'}    //placeholder
                    style={{ width: '150px' }}
                    allowClear
                >
                    {   // data source
                        [
                            {text:'创建时间',value:'createTime'},
                            {text:'阅读人数',value:'readNum'},
                        ]
                        .map((el,ind)=>(
                            <Select.Option 
                                value={el.value}  // value key
                            key={ind}>
                                {el.text}       {/* text key */}
                            </Select.Option>
                        )
                    )}
                </Select>
            </div>
            <AddButton>添加xxx</AddButton>
            <Search
                type="text"
                placeholder="支持输入问候标题、概述搜索"
                onSearch={value=>{
                    Model.run('courseTag',function*({put,change}){
                        yield change('courseLabel',value)
                        yield put({type:'getCourseTag'})
                    })
                }}
                style={{width:'300px'}}  
                onChange={e=>{
                    if(e.target.value==='') {
                        Model.run('courseTag',function*({put,change}){
                            yield change('courseLabel','')
                            yield put({type:'getCourseTag'})
                        })
                    }
                }}                   
            />
        </SearchRow>
    ) 
}
export default Header
