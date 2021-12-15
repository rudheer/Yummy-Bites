import React from 'react';
import styled from 'styled-components';

const ResHotel = ({ restaurant }) => {
  return (
    <Hotelinfo>
      <ResDetails>
        <ul>
          <li style={{ fontSize: '48px', color: 'black', fontWeight: 'bold' }}>
            {restaurant.name}
          </li>
          <li>{restaurant.resdec}</li>
          <li>{restaurant.address}</li>
        </ul>
      </ResDetails>
      <Resimage>
        {restaurant.photo && <img src={restaurant.photo} alt='restaurantpic' />}
      </Resimage>
    </Hotelinfo>
  );
};

export default ResHotel;

const Hotelinfo = styled.div`
  display: flex;
  height: 450px;
  background-color: white;
  margin-top: 60px;
  border-bottom: solid 2px #696969;
`;
const ResDetails = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
  ul {
    margin: 20px;
    list-style-type: none;
  }
  li {
    list-style-type: none;
    font-size: 36px;
    padding: 10px 10px;
    color: #696969;
  }
`;
const Resimage = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  padding: 0px 50px;
  img {
    object-fit: cover;
    border-radius: 10px;
  }
`;
