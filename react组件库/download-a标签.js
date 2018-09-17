import React from 'react'
import styled from 'styled-components'
const Trigger = styled.a`
    text-decoration: initial;
    cursor:pointer;
    color:white;        
    &:hover{
        color:white;        
    }
`
const Download = props => {
    const href=`${config.api}/paper/download/${Model.get('app').userId}/${id}/${file}?access_token=${Model.get('app').accessToken}`
    return (
        <Trigger href={href}>{props.children}</Trigger>
    )
}
export default 

