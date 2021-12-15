import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import Items from './Items';

const Allitems = ({ restaurant }) => {
  return (
    <Wrap>
      <Fooditems>
        <Searchfood>
          <Text>
            <p>Choose a Recipie and order now!!!</p>
          </Text>
          <form>
            <input type='text' placeholder="Search for Recipie's here" />
          </form>
        </Searchfood>
        {restaurant.dishes ? <Items resitems={restaurant.dishes} /> : null}
      </Fooditems>
      <Cart>
        <Heading>
          <li>Cart</li>
        </Heading>
        <label style={{ fontSize: '20px' }}>
          Items addded to the cart are:-
        </label>
        <Cartitems>
          <ul>
            <Product>
              <li style={{ padding: '10px' }}>Ham-Burger</li>
              <li style={{ padding: '10px' }}>180/-</li>
            </Product>
            <Product>
              <li style={{ padding: '10px' }}>Paneer Butter Masala</li>
              <li style={{ padding: '10px' }}>275/-</li>
            </Product>
            <Product>
              <li style={{ padding: '10px' }}>Butter Nans</li>
              <li style={{ padding: '10px' }}>90/-</li>
            </Product>
          </ul>
        </Cartitems>
        <Total>
          <li style={{ padding: '10px' }}>Total Amount</li>
          <li style={{ padding: '10px' }}>545/-</li>
        </Total>
        <li style={({ fontSize: '22px' }, { padding: '10px' })}>
          You are one step behind, click on the order button and get the meal.
        </li>
        <button>Order</button>
      </Cart>
    </Wrap>
  );
};

export default Allitems;

const Wrap = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Fooditems = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
`;
const Cart = styled.div`
  flex: 4;
  height: 500px;
  width: 100%;
  display: flex;
  margin: 20px;
  background-color: #fdfbfb;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  position: sticky;
  button {
    width: 120px;
    font-size: 22px;
    margin-top: 5px;
    cursor: pointer;
    background-color: lightcoral;
    border: none;
    color: white;
    border-radius: 10px;
    padding: 10px;
  }
`;
const Searchfood = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 140px;
  input[type='text'] {
    display: flex;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    outline: solid 1px black;
  }
`;
const Text = styled.div`
  font-size: 40px;
  padding: 10px 10px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Heading = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightcoral;
  border: none;
  color: white;
  border-radius: 10px;
  li {
    list-style-type: none;
    font-size: 36px;
  }
`;
const Cartitems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  padding: 5px 5px;
  border-bottom: solid 1px black;
  ul {
    font-size: 20px;
    list-style-type: none;
  }
`;
const Product = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  li {
    font-size: 20px;
    list-style-type: none;
  }
  border-bottom: solid 1px black;
`;
