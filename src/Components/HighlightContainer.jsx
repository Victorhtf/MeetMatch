import React from 'react'

import "../styles/highlightcontainer.sass"

const HighlightContainer = (props) => {
  return (
    <div className="selection-container-second">
        <div className="selection-container-third">
            <p className="text">{props.text}</p>
        </div>
    </div>
  )
}

export default HighlightContainer