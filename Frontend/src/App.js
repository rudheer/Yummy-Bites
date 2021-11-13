import React from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Restaurant from './components/Restaurant';
import Restaurants from './components/Restaurants';
import SearchBar from './components/SearchBar';
import Topbar from './components/Topbar';
import RestaurantOrder from './pages/RestaurantOrder';

function App() {
  return (
    <div className="App">
      <RestaurantOrder/>
    </div>
  );
}

export default App;
