import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
    return (
        <Wrap>
            <LeftItems>
                <li>Add Restaurant</li>
            </LeftItems>
            <RightItems>
                <li>Log In</li>
                <li>Sign In</li>
            </RightItems>
        </Wrap>
    )
}

export default Topbar

const Wrap=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
background-color:white;
padding: 0 20px;
top:0;
left:0;
right:0;
font-size:25px;
font-family:  'Josefin Sans', sans-serif;
`
const LeftItems=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
li{
    list-style-type: none;
    padding:0 20px;
    cursor:pointer;
    color:#696969;
}
`
const RightItems=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
li{
    list-style-type: none;
    padding:0 20px;
    flex-wrap:nowrap;
    cursor:pointer;
    color:#696969;
}
`