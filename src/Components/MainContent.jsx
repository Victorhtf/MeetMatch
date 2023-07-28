
import { LuSettings } from 'react-icons/lu'


import "../styles/maincontent.sass"


const MainContent = () => {
  
  return (
    <div className='main-container'>
      <div className="settings">
        <LuSettings className='icon'/>
      </div>
      <Settings/>
    </div>
  )
}

export default MainContent