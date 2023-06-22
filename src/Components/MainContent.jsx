import React from 'react'

import Cards from './Cards'
import Buttons from "./Buttons"

import "../styles/maincontent.sass"


const MainContent = () => {
  return (
    <div className='main-container'>
      <Cards/>
      <Buttons/>
    </div>
  )
}

export default MainContent