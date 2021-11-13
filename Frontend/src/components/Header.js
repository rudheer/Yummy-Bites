import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <Headertitle>
                <span>Yummy Bites</span>
            </Headertitle>
            <img src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2021/02/Corbin-King-Valentines-Steak.jpg" alt="food"/>
        </Container>
    )
}

export default Header

const Container=styled.div`
margin-top:60px;
img{
    margin-top: 64px;
    width:100%;
    height: 450px;
    object-fit: cover;
}
`
const Headertitle=styled.div`
display: flex;
align-items: center;
flex-direction: column;
font-family: 'Lora', serif;
color: #696969;
font-size: 110px;
top: 5%;
position:absolute;
padding-left:420px;
`

