import React from "react"
import styled from 'styled-components'
import { Input, Form, Select } from 'antd'
import {Model} from "dvax"
const Search = Input.Search

    <Search
        placeholder="支持输入问候标题、概述搜索"
        onSearch={value=>{
            $.mutate("query.search",value)
            $.put({type:'clearPagination'})
            $.put({type:'get'})
        }}
        style={{width:'300px'}}  
        onChange={e=>{
            const value = e.target.value
            if(value === '') {
                $.mutate("query.search",value)
                $.put({type:'clearPagination'})
                $.put({type:'get'})
            }
        }}                   
    />