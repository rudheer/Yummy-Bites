import React, { useEffect,useState } from 'react'
import Topbar from '../../components/Topbar'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Restaurants from '../../components/Restaurants'
import axios from "axios"

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        const fetchRestaurants = async ()=>{
            const res=await axios.get("/restaurants");
            setRestaurants(res.data);
        }
        fetchRestaurants();
    });
    return (
        <div>
            <Topbar/>
            <Header/>
            <SearchBar/>
            <Restaurants restaurants={restaurants} />
        </div>
    )
}

export default Home
