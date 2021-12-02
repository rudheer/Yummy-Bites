import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Restaurant = ({restaurant}) => {
    return (
        <Wrap>
            <Image>
                {restaurant.photo &&(
                    <img src={restaurant.photo} alt="fooditem"/>
                )}
            </Image>
            <Info>
                <Link to={`/restaurant/${restaurant._id}`}  style={{textDecoration:"none",color:"inherit"}}>
                <Title>
                <p>{restaurant.name}</p>
                </Title>
                </Link>
                <Description>
                    <p>{restaurant.resdec}</p>
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
