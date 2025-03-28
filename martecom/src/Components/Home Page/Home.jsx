import React from 'react'
import Carousel from './Carousel'
import "./Home.css";
import ServiceDataCard from './ServiceDataCard';
import BigDiscount from './BigDiscount';
import NewArrivals from './NewArrivals';
import BestSales from './BestSales';


const Home = () => {
  return (
    <div>
        <Carousel/>
        <ServiceDataCard/>
        <BigDiscount/>
        <NewArrivals/>
        <BestSales/>
    </div>
  )
}

export default Home
