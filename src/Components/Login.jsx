import React from 'react'
import "../styles/login.sass"

const Login = () => {
  return (
    <div className='form-container'>
        <h1 className='title'>Entrar</h1>
        <input className='label' type="text" id="1" placeholder='Email ou telefone'/>
        <input className='label' type="password" id="1" placeholder='Senha'/>
        <button className='submit'>Entrar</button>
        <div className='items'>
          <div className='remember'>
            <input className='checkbox'type="checkbox" id="1"/>
            <h6 className='direct'>Lembre-se de mim</h6>
          </div>
          <h6 className='help'>Precisa de ajuda?</h6> 
        </div>
        <div className='newhere'>
          <h7 className='noaccount'>Não tem uma conta?</h7>
          <a className='redirect' target="_blank" href='https://www.facebook.com' >Comece por aqui</a>
        </div>
    </div>
  )
}


export default Login