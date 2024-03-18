import react from 'react'
import "./Login.css"
import Dog from '../assets/dog.svg'

function Login() {
    return (
        <div className="container">
            <img src={Dog} />
            <div className="form">
                <h1>Log In</h1>
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" />
                    
                    <label htmlFor="pass">Senha</label>
                    <input type="password" id="pass" name="pass" />

                    <button className='btnEntrar'>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Login