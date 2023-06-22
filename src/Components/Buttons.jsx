import React from 'react'

import { FaHeart } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

import "../styles/buttons.sass"

const Buttons = () => {
  return (
    <div className='btn'>
      <div className="dislike-icon">
        <CgClose/>
      </div>
      <div className="like-icon">
        <FaHeart/>
      </div> 
    </div>
  )
}

export default Buttons