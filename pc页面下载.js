import React from 'react'
import styled from 'styled-components'

const Trigger = styled.a`
    textDecoration: initial;
    cursor:pointer;
`
const Download = props => {
    const href=`${config.api}/paper/download/${Model.get('app').userId}/${id}/${file}?access_token=${Model.get('app').accessToken}`
    return (
        <Trigger href={href}>{props.children}</Trigger>
    )
}

// download=""
export default 

