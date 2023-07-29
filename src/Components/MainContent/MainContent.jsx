import { LuSettings } from 'react-icons/lu'


import "../styles/maincontent.sass"
import Login from '../Login'


const MainContent = () => {
  
  return (
    <div className='main-container'>
      <div className="settings">
        <LuSettings className='icon'/>
      </div>
      <Login/>
    </div>
  )
}

export default MainContent