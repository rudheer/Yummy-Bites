import React from 'react'
import ResHotel from './ResHotel'
import Resnav from './Resnav'
import styled from 'styled-components'
import Allitems from './Allitems'

const RestaurantOrder = () => {
    return (
        <Container>
            <Resnav/>
            <ResHotel/>
            <Allitems/>
        </Container>
    )
}

export default RestaurantOrder

const Container=styled.div`
`