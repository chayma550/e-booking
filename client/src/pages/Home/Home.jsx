import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import "./home.css"
import Footer from '../../components/Footer/Footer'
import PropertyList from "../../components/PropertyList/PropretyList"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
       <h1 className='homeTitle'>Browse by property type </h1>
            <PropertyList/>
            <h1 className='homeTitle'>Homes guests love </h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/> 
      </div>
    </div>
  )
}
