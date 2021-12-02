import React from 'react'
import styled from 'styled-components'
import Restaurant from './Restaurant'

const Restaurants = ({restaurants}) => {
    return (
        <ALLrestaurants>
            {restaurants.map(p=>(
                <Restaurant restaurant={p} />
            ))}
        </ALLrestaurants>
    )
}

export default Restaurants

const ALLrestaurants=styled.div`
flex: 9;
display: flex;
align-items:center;
justify-content:center;
flex-wrap: wrap;
margin: 0px 70px;
`
