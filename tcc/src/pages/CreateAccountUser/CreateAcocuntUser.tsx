import React from "react"
import Logo from "../../assets/LOGO.svg"

import "./CreateAcocuntUser.css"

function CreateAccountUser() {
    return (
        <>
            <div className="container">
                <div className="left-column">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="step-buttons">
                        <div className="step-button active">
                            <img src="img/perfil.png" alt="Perfil" />
                                <div className="button-info">
                                    <h3><strong>Dados Pessoais</strong></h3>
                                    <p>Dados Pessoais</p>
                                </div>
                        </div>
                        <div className="divider"></div>
                        <div className="step-button">
                            <img src="img/casa.png" alt="Endereço" />
                                <div className="button-info">
                                    <h3><strong>Endereço</strong></h3>
                                    <p>Informações do seu endereço</p>
                                </div>
                        </div>
                        <div className="divider"></div>
                        <div className="step-button">
                            <img src="img/ok.png" alt="Conclusão" />
                                <div className="button-info">
                                    <h3><strong>Conclusão</strong></h3>
                                    <p>Revisar e submeter</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="section-header">
                        <h1>Crie sua conta!</h1>
                        <p>Preencha os campos com seus dados</p>
                    </div>
                    <div className="form-container">
                        <div className="input-group">
                            <label>Nome completo</label>
                            <input type="text" id="nome-completo" placeholder="Nome completo" />
                        </div>
                        <div className="input-group">
                            <label>CPF</label>
                            <input type="text" id="cpf" placeholder="CPF" />
                        </div>
                        <div className="input-group">
                            <label>Telefone</label>
                            <input type="text" id="telefone" placeholder="Telefone" />
                        </div>
                        <div className="input-group">
                            <label>E-mail</label>
                            <input type="email" id="email" placeholder="E-mail" />
                        </div>
                        <div className="button-container">
                            <button className="next-button">Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccountUser