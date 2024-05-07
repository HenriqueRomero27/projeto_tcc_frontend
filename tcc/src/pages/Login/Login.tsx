import React from 'react';
import './Login.css';
import '../root.css';
import Dog from '../assets/dog.svg';
import Logo from '../assets/LOGO.svg';

function Login() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={Dog} alt="Dog"/>
      </div>
      <div className="form">
        <div className="logo-container">
          <img src={Logo} alt="Logo" id="logo" />
        </div>
        <h1>Log In</h1>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="pass">Senha</label>
          <input type="password" id="pass" name="pass" />
          <button className="btnEntrar">Entrar</button>
          <p className="or">ou</p>
          <div className="social-buttons">
            <button className="btnGoogle">Continuar com Google</button>
            <button className="btnFacebook">Continuar com Facebook</button>
          </div>
          <p className="create-account">Ainda não tem uma conta?<span className="emphasis"> Crie uma agora</span>.</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
