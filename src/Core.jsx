import MainContent from "./Components/MainContent"
import Sidebar from "./Components/Sidebar"


function Core() {
  return (
    <div className="global">
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default Core
