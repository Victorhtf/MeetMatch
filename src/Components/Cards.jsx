import React from 'react'

import { FaStar } from 'react-icons/fa'
import { BsFillInfoCircleFill } from 'react-icons/bs'

import restaurantPhoto from "../assets/outback.png"
import "../styles/cards.sass"


const Cards = (props) => {
  return (
    <div className="card-container">
      <img className='restaurantPhoto' src={restaurantPhoto}></img>
      <div className="division">
        <p className='restaurantTitle' restaurantName="McDonald's">McDonald's</p>
        <BsFillInfoCircleFill className="infos"/>
      </div>
      <p className='restaurantLocation' restaurantLocation="Shopping Santa Úrsula">Shopping Santa Úrsula</p>
      <div className="stars-container">
        <div className='star-container'>
          <FaStar className='fa-star'/>
          <FaStar className='fa-star'/>
          <FaStar className='fa-star'/>
          <FaStar className='fa-star'/>
          <FaStar className='fa-star'/>
        </div>
      </div>
    </div>
  )
}

export default Cards