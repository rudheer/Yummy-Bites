import React from 'react'
import styled from 'styled-components'

const Signin = () => {
    return (
        <Background>
        <Container>
            <Close>
                <li>Sign In</li>
              <button > X </button>
            </Close>
            <Info>
                <form>
                    <label >Username</label>
                    <input type="text" placeholder="Enter yout username..." />
                    <label >Email</label>
                    <input type="text" placeholder="Enter yout email..." />
                    <label >Password</label>
                    <input type="password" placeholder="Enter yout password..." />
                    <button >Signin</button>
                </form>
            </Info>
        </Container>
    </Background>
    )
}

export default Signin

const Background=styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(200, 200, 200);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`
const Container=styled.div`
width: 500px;
height: 500px;
border-radius: 12px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
padding: 25px;
`
const Close=styled.div`
display: flex;
button{
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    padding-left:110px;
}
li{
    font-size:36px;
    list-style-type:none;
}
`
const Info=styled.div`
padding:10px 10px;
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
input[type='password'] {
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: solid 1px black;
}
button{
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
}
label{
    font-size:26px;
}
`
