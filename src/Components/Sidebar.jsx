import React, { useState } from 'react'

import Photo from "../assets/user.png"
import HighlightContainer from './HighlightContainer'

import "../styles/Sidebar.sass"

const Sidebar = () => {
    // const = [sidebar, setSidebar] = useState(false);

    // const = handleToggle = () => {
    //     setSidebar(!open)
    // }

    const variants = {
        open: {width: "250px"},
        closed: {width: "50px"}
    }
  return (
    <div className='sidebar-container'>
        <div className="secondary-content">
            <div className="user-container">
                <div className="photo-container">
                    <img className="user-photo" src={Photo}></img>
                </div>
                <p className='user-name'>Victor Formisano</p>
            </div>
        </div>
        <div className="carrousel-container">
            <div className="selector">
                <HighlightContainer text="Matches"/>
                <HighlightContainer text="Explore"/>
            </div>
            <div className="self-content">
            </div>
        </div>
    </div>
  )
}

export default Sidebar