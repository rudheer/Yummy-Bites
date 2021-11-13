import React from 'react'
import Topbar from '../../components/Topbar'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import Restaurants from '../../components/Restaurants'

const Home = () => {
    return (
        <div>
            <Topbar/>
            <Header/>
            <SearchBar/>
            <Restaurants/>
        </div>
    )
}

export default Home
