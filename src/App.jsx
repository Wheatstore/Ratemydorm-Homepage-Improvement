import { useState } from 'react'
import './App.css'
import Navigation from './Nav'
import Banner from './Banner'
import Features from './Features'


function App() {

  return (
      <>
        <Navigation />
        <Banner />
        <div className='spacing'></div>
        <Features />
    </>
)
}
export default App
