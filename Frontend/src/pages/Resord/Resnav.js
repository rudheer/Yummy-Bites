import React from 'react'
import styled from 'styled-components'
import { Person } from '@material-ui/icons'

const Resnav = () => {
    return (
        <Resnavbar>
            <Companyname>
                <li>Yummy Bites</li>
            </Companyname>
            <Nibba>
                <li><Person style={{fontSize:"45px",}} /></li>
                <li>Rudheer</li>
            </Nibba>
        </Resnavbar> 
    )
}

export default Resnav

const Resnavbar=styled.div`
height:60px;
position:fixed;
display:flex;
align-items:center;
padding: 0 20px;
top:0;
left:0;
right:0;
font-size:25px;
font-family:  'Josefin Sans', sans-serif;
background-color:white;
`
const Companyname=styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
flex:1;
li{
    list-style-type: none;
    padding:0 20px;
    cursor:pointer;
    color:#696969;
    font-size:45px;
}
`
const Nibba=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1;
li{
    list-style-type: none;
    padding:0 20px;
    cursor:pointer;
    color:#696969;
    font-size:45px;
}
`