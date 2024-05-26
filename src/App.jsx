import { useState } from 'react'
import './App.css'
import Navigation from './Nav'
import Banner from './Banner'
import Features from './Features'
import SchoolCard from './Card'


function App() {

  return (
      <>
        <Navigation />
        <Banner />
        <div className="spacing"></div>
        <SchoolCard />
        <Features />
    </>
)
}
export default App
