import React from "react"
import styled from 'styled-components'
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
const $ = Model.assign('current')

<Select
    onChange={(value)=>{        
        $.change('query.categoryId',value||'') // allow clear
        $.put({type:'get'})
    }}
    placeholder='问候类别'    //placeholder
    style={{ width: '150px' }}
    allowClear
>
    {props.categoryData.map((el,ind)=>(<Select.Option value={el.id} key={ind}>{el.name}</Select.Option>))}
</Select>


进入查看或者详情要保存设置，只有在切换tab时才清空条件和搜索