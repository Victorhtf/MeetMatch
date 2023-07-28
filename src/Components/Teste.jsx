import '../styles/../styles/Teste.sass'
import { FiEdit3 } from 'react-icons/fi'


const Settings = () => {
    return (
    <div className="my-profile">
        <h1 className="title">Meu perfil</h1>
        <div className="card-content">
            <img className='foto-do-moleque' src="https://th.bing.com/th/id/R.135733756def716f8c7929825dea2892?rik=KuQOmYasOfZDxQ&pid=ImgRaw&r=0%22/%3E"></img>
            <div className="personal-data">
                <h3 className='name'>Bisteca violeiro</h3>
                <h3 className='role'>Consultor Financeiro</h3>
                <h4 className='location'>Ribeirão Preto-SP</h4>
            </div>
            <div className="button-container">
                <p>Edit</p>
                <FiEdit3/>
            </div>
        </div> 
    </div>
  )
}


export default Settings