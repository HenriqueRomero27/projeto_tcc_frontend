import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Defina uma interface para os dados do usuário
interface UserData {
  id: string;
  name: string;
  nickname: string;
  cpf: string;
  gender: string;
  phone: string;
  street: string;
  numberHouse: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
  complement?: string;
}

const Perfil: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Função para obter o ID do usuário a partir do token
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirecionar para o login se não houver token
      window.location.href = '/login';
      return null;
    }

    try {
      const decodedToken = jwtDecode(token); // Decodificar o JWT
      return decodedToken.sub;
    } catch (error) {
      console.error('Erro ao decodificar o token', error);
      window.location.href = '/login';
      return null;
    }
  };

  // Função para buscar os dados do usuário
  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch(`https://3000-henriquerom-backendmiau-ypctsaxkoc6.ws-us116.gitpod.io/users/${userId}`);
      const data: UserData = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    }
  };

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  // Função para atualizar os dados do usuário no backend
  const handleSave = async () => {
    try {
      const response = await fetch(`https://3000-henriquerom-backendmiau-ypctsaxkoc6.ws-us116.gitpod.io/users/${userData?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Dados atualizados com sucesso!');
        setIsEditing(false);
      } else {
        alert('Erro ao atualizar dados');
      }
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  // Função para habilitar a edição dos dados
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  
  return (
    <div>
      <h1>Perfil</h1>
      {userData ? (
        <div>
          <div>
            <label>Nome Completo:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Apelido:</label>
            <input
              type="text"
              name="nickname"
              value={userData.nickname}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={userData.cpf}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Sexo:</label>
            <select
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="" disabled>Selecione o seu sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label>Telefone:</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          {/* Endereço */}
          <div>
            <label>Rua:</label>
            <input
              type="text"
              name="street"
              value={userData.street}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Número:</label>
            <input
              type="text"
              name="numberHouse"
              value={userData.numberHouse}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Bairro:</label>
            <input
              type="text"
              name="neighborhood"
              value={userData.neighborhood}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>CEP:</label>
            <input
              type="text"
              name="cep"
              value={userData.cep}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Cidade:</label>
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Estado:</label>
            <input
              type="text"
              name="state"
              value={userData.state}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label>Complemento:</label>
            <input
              type="text"
              name="complement"
              value={userData.complement || ''}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          <button onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? 'Salvar' : 'Editar'}
          </button>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default Perfil;

