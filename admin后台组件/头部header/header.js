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
function Header(props){
    return (
        <SearchRow>          
            
            <div style={{display:'flex'}}>
                
                <Select/>
                &nbsp;&nbsp;
                
                <Select/>
                &nbsp;&nbsp;
                
                <Select/>
                
            </div>

            <Search/>
            
        </SearchRow>
    ) 
}
export default Header
