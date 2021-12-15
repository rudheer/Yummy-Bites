import React, { useEffect, useState } from 'react';
import ResHotel from './ResHotel';
import Resnav from './Resnav';
import styled from 'styled-components';
import Allitems from './Allitems';
import { useLocation } from 'react-router';
import axios from 'axios';

const RestaurantOrder = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    console.log('From useEffect');
    const getRestaurant = async () => {
      const res = await axios.get('/restaurants/' + path);
      setRestaurant(res.data);
      //console.log(restaurant);
    };
    getRestaurant();
  }, []);
  return (
    <Container>
      <Resnav />
      <ResHotel restaurant={restaurant} />
      <Allitems restaurant={restaurant} />
    </Container>
  );
};

export default RestaurantOrder;

const Container = styled.div``;
