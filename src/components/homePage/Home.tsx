import React from 'react'
import "./home.css"
import Products from '../Products/products'
import Banner from '../Banner/Banner'
import Categories from '../categories/Categories'
const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Categories/>
            <Products api="products"/>
        </div>
    )
}

export default Home