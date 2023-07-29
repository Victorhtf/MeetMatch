import '../styles/../styles/Teste.sass'
import { FiEdit3 } from 'react-icons/fi'

const Settings = () => {
    return (
    <div className="my-profile">
        <h1 className="title">Meu perfil</h1>
        <div className="card-profile">
            <img className='foto-do-moleque' src="https://th.bing.com/th/id/R.135733756def716f8c7929825dea2892?rik=KuQOmYasOfZDxQ&pid=ImgRaw&r=0%22/%3E"></img>
            <div className="personal-data">
                <h3 className='name'>Victor Formisano</h3>
                <h3 className='role'>Engenheiro da Computação</h3>
                <h4 className='location'>Ribeirão Preto-SP</h4>
            </div>
            <div className="button-container">
                <p>Edit</p>
                <FiEdit3/>
            </div>
        </div> 
        <div className="card-personal-info">
            <div className="first-name">
                <h3 className='label'>First name</h3>
                <h4 className='self'> Victor</h4>
            </div>
            <div className="last-name">
                <h3 className='label'>Surname</h3>
                <h4 className='self'>Formisano</h4>
            </div>
            <div className="first-name">
                <h3 className='label'>Adress</h3>
                <h4 className='self'>São Paulo</h4>
            </div>
            <div className="phone">
                <h3 className='label'>Phone</h3>
                <h4 className='self'>16 98813-3031</h4>
            </div>
            <div className="Bio">
                <h3 className='label'>Bio</h3>
                <h4 className='self'>Love</h4>
            </div>
            <div className="Partner">
                <h3 className='label'>Couple</h3>
                <h4 className='self'>My couple</h4>
            </div>

        </div>
    </div>
  )
}


export default Settings;