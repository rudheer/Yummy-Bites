import React from 'react'
import styled from 'styled-components'
const Item = ({dish}) => {
    return (
        <Wrap>
            <Image>
                <img src="https://www.mothersrecipe.com/wp-content/uploads/2020/03/oDbMG8chU6-624x416.jpg" alt="fooditem"/>
            </Image>
            <Info>
                <Title>
                <p>{dish.name}</p>
                </Title>
                <Description>
                    <p>{dish.dishdec}</p>
                </Description>
                <Cost>
                    <li>{dish.price}/-</li>
                </Cost>
                <button>Add to Cart</button>
            </Info>
        </Wrap>
    )
}

export default Item

const Wrap=styled.div`
width: 200px;
margin: 0px 25px 40px 25px;
`
const Image=styled.div`
img{
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 7px;
}
`
const Info=styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
margin-top: 5px;
cursor: pointer;
background-color: lightcoral;
border: none;
color: white;
border-radius: 10px;
padding: 10px;
}
`
const Title=styled.div`
font-size: 20px;
font-weight: 700;
margin-top: 15px;
`
const Description=styled.div`
font-size: 10px;
color: #444;
line-height: 18px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`
const Cost=styled.div`
display:flex;
justify-content:flex-start;
font-size: 18px;
font-weight: 130px;
color: #444;
line-height: 18px;
li{
    list-style-type:none;
}
`

