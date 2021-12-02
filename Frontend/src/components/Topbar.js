import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Topbar = () => {
    const user=true;
    return (
        <Wrap>
            <LeftItems>
                <li>Add Restaurant</li>
            </LeftItems>
            <RightItems>
                <li>
                    <Link to="/login"  style={{textDecoration:"none",color:"inherit"}}>Log In</Link>
                </li>
                <li>
                <Link to="/register"  style={{textDecoration:"none",color:"inherit"}}>Sign Up</Link>
                </li>
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