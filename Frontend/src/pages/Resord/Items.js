import React from 'react'
import styled from 'styled-components'
import Item from './Item'
const Items = ({resitems}) => {
    return (
        <Container>
            {resitems.map(r=>(
                <Item dish={r}/>
            ))}
            
        </Container>
    )
}

export default Items
const Container=styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-wrap: wrap;
margin: 30px 20px;
`
