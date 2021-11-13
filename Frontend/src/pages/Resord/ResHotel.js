import React from 'react'
import styled from'styled-components'

const ResHotel = () => {
    return (
        <Hotelinfo>
            <ResDetails>
                <ul>
                    <li style={{fontSize:"48px",color:"black", fontWeight:"bold"}}>The Taj Hotel</li>
                    <li>Chinese, Italian, North Indian</li>
                    <li>Dalal street, Mumbai</li>
                    <li>11AM - 10PM</li>
                </ul>
            </ResDetails>
            <Resimage>
                <img src="https://www.nkrealtors.com/blog/wp-content/uploads/2018/03/hyderabadi-cuisine.jpg" alt="restaurant"/>
            </Resimage>
        </Hotelinfo>
    )
}

export default ResHotel

const Hotelinfo=styled.div`
display:flex;
height:450px;
background-color:white;
margin-top:60px;
border-bottom:solid 2px #696969;

`
const ResDetails=styled.div`
flex: 5;
display: flex;
justify-content:flex-start;
flex-wrap: wrap;
margin: 20px;
ul{
    margin:20px;
    list-style-type: none;
}
li{
    list-style-type: none;
    font-size:36px;
    padding:10px 10px;
    color:#696969;
}
`
const Resimage=styled.div`
flex:7;
display:flex;
justify-content:flex-end;
margin:20px;
padding:0px 50px;
img{
    object-fit: cover;
    border-radius: 10px;
}
`