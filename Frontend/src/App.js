import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';
import SearchBar from './components/SearchBar';
import Topbar from './components/Topbar';
import Home from './pages/Home/Home';
import RestaurantOrder from './pages/Resord/RestaurantOrder';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
