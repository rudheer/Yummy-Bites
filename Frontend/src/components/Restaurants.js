import React from 'react'
import styled from 'styled-components'
import Restaurant from './Restaurant'

const Restaurants = () => {
    return (
        <ALLrestaurants>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
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
