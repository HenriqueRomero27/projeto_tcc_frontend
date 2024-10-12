import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Certifique-se de que o CSS está correto
import "../../root.css"
import logo from '../../assets/LOGO.svg';
import dogImage from '../../assets/dog.svg';
import Perfil from '../PerfilUser/Perfil';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página

    try {
      // Enviar requisição de login para o back-end
      const response = await fetch('https://3000-henriquerom-backendmiau-ypctsaxkoc6.ws-us116.gitpod.io/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido, você pode salvar o token no localStorage ou sessionStorage
        localStorage.setItem('authToken', data.token);
        alert('Login realizado com sucesso!');
        navigate("/perfil")
         
      } else {
        // Mostrar mensagem de erro
        alert(data.message || 'Erro ao realizar login');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar ao servidor');
    }
  };

  const handleCreateAccount = () => {
    window.location.href = '../CreateAccountUser/DadosPessoais.html'; // Substitua pelo caminho correto
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={dogImage} alt="Dog" />
      </div>
      <div className="form">
        <div className="logo-container">
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <h1>Log In</h1>
        <form id="loginForm" onSubmit={handleLogin}>
          <div>
            <div className="label">
              <label htmlFor="email">E-mail</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="label">
              <label htmlFor="pass">Senha</label>
            </div>
            <input
              type="password"
              id="pass"
              name="pass"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btnEntrar">Entrar</button>
          <div className="cc">
            <p id="createAccountText">
              Ainda não possui uma conta?{' '}
              <span id="createAccount" onClick={handleCreateAccount} style={{ cursor: 'pointer', color: 'blue' }}>
                Crie agora!
              </span>
            </p>
          </div>
          <p className="or">ou entre com</p>
          <div className="social-buttons">
            <button type="button" className="btnGoogle">Continuar com Google</button>
            <button type="button" className="btnFacebook">Continuar com Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
