import React from 'react'
import styled from 'styled-components'

const Restaurant = () => {
    return (
        <Wrap>
            <Image>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hakiiz1hbrowuqdecmgd" alt="fooditem"/>
            </Image>
            <Info>
                <Title>
                <p>The Taj Hotel</p>
                </Title>
                <Description>
                    <p>Chinese, Italian</p>
                </Description>
            </Info>
        </Wrap>
    )
}

export default Restaurant

const Wrap=styled.div`
width: 350px;
margin: 0px 25px 40px 25px;
`
const Image=styled.div`
img{
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
}
`
const Info=styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Title=styled.div`
font-size: 24px;
font-weight: 700;
margin-top: 15px;
cursor: pointer;
`
const Description=styled.div`
font-size: 14px;
color: #444;
line-height: 24px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
`
