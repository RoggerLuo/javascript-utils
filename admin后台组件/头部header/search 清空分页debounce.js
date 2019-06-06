import React from "react"
import styled from 'styled-components'
import {Model} from "dvax"

import { Input, Form, Select } from 'antd'
import debounce from 'dvax/debounce'
const Search = Input.Search


const onSearch = value => {
    $.mutate("query.search",value)
    $.put({type:'clearPagination'})
    $.put({type:'get'})    
}
const debounceSearch = debounce(onSearch,500)
const onChange = value => {
    $.mutate("query.search",value)
    debounceSearch(value)
}


<Search
    placeholder="支持输入问候标题、概述搜索"
    onSearch={search}
    style={{width:'300px'}}
    onChange={e=>search(e.target.value)}
/>