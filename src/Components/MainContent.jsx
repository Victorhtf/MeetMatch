
import { LuSettings } from 'react-icons/lu'
import Cards from './Cards'
import Buttons from "./Buttons"

import "../styles/maincontent.sass"


const MainContent = () => {
  
  return (
    <div className='main-container'>
      <div className="settings">
        <LuSettings className='icon'/>
      </div>
      <Cards/>
      <Buttons/>
    </div>
  )
}

export default MainContent