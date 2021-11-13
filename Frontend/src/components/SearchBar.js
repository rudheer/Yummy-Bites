import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    return (
        <Wrap>
            <Text>
                <p>Chek out for a Restaurant and order now!!!</p>
            </Text>
             <form>
                <input type="text" placeholder="Search for Restaurant's here" />
            </form> 
        </Wrap>
    )
}

export default SearchBar

const Wrap=styled.div`
height:150px;
input[type='text'] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: solid 1px black;
  }
`
const Text=styled.div`
font-size:40px;
padding:10px 10px;
align-items:center;
display:flex;
justify-content:center;
`
