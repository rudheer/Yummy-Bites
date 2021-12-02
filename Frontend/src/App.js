import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signin from './components/Signin';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';
import SearchBar from './components/SearchBar';
import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import RestaurantOrder from './pages/Resord/RestaurantOrder';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user= false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={user ? <Home/>:<Login/>} />
        <Route path="/register" element={user ? <Home/>:<Signin/>} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantOrder/>} />
      </Routes>
    </Router>
  );
}

export default App;
