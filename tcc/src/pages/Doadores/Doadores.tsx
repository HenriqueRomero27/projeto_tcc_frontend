import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../root.css";
import "./Doadores.css";

interface Animal {
  name: string;
  image: string;
}

const animalData: Record<string, Animal[]> = {
  feraFuturo: [
    { name: 'Mel', image: 'img/fera1.png' },
    { name: 'Matteo', image: 'img/fera2.png' },
    { name: 'Bruno', image: 'img/fera3.png' },
    { name: 'Daisy', image: 'img/fera4.png' }
  ],
  patinhasUrbanas: [
    { name: 'Slink', image: 'img/pat1.png' },
    { name: 'Toby', image: 'img/pat2.png' },
    { name: 'Zoe', image: 'img/pat3.png' },
    { name: 'Kira', image: 'img/pat4.png' }
  ],
  asasLivres: [
    { name: 'Fafa', image: 'img/asas1.png' },
    { name: 'Pepe', image: 'img/asas2.png' },
    { name: 'Kiwi', image: 'img/asas3.png' },
    { name: 'Peep', image: 'img/asas4.png' }
  ],
  ondaAquatica: [
    { name: 'Alfredo', image: 'img/aqua1.png' },
    { name: 'Patrício', image: 'img/aqua2.png' },
    { name: 'Márcia', image: 'img/aqua3.png' },
    { name: 'Célia', image: 'img/aqua4.png' }
  ]
};

const Doadores: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('feraFuturo');
  const [animals, setAnimals] = useState<Animal[]>(animalData['feraFuturo']);

  useEffect(() => {
    setAnimals(animalData[selectedSection]);
  }, [selectedSection]);

  const handleSupportItemClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Header />

      <main>
        <section className="hero-image">
          <img src="img/head.png" alt="Imagem Principal" />
          <div className="text-overlay">
            <p className="small-text">Que não seja por nós, e sim por <strong>eles</strong>!</p>
            <p className="large-text">CONHEÇA NOSSOS DOADORES</p>
          </div>
        </section>

        <div className="background-image"></div>

        <section className="donor-title">
          <h2>Por que ser um doador?</h2>
        </section>

        <section className="info-section">
          <div className="info-item">
            <div className="info-image">
              <img src="img/img1.png" alt="Imagem 1" />
            </div>
            <div className="info-text">
              <h3>Transforme Vidas</h3>
              <p>Sua doação proporciona alimentos e cuidados para animais necessitados.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-image">
              <img src="img/img2.png" alt="Imagem 2" />
            </div>
            <div className="info-text">
              <h3>Fazer a Diferença</h3>
              <p>Mesmo pequenas contribuições têm um grande impacto!</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-image">
              <img src="img/img3.png" alt="Imagem 3" />
            </div>
            <div className="info-text">
              <h3>Sinta-se bem</h3>
              <p>Ao ajudar, você promove um mundo mais gratificante.</p>
            </div>
          </div>
        </section>

        <section className="collaborate-title">
          <h2>ESCOLHA UM LOCAL PARA COLABORAR</h2>
        </section>

        <section className="support-section">
          <div
            className={`support-item ${selectedSection === 'feraFuturo' ? 'active' : ''}`}
            onClick={() => handleSupportItemClick('feraFuturo')}
          >
            Fera Futuro
          </div>
          <div
            className={`support-item ${selectedSection === 'patinhasUrbanas' ? 'active' : ''}`}
            onClick={() => handleSupportItemClick('patinhasUrbanas')}
          >
            Patinhas Urbanas
          </div>
          <div
            className={`support-item ${selectedSection === 'asasLivres' ? 'active' : ''}`}
            onClick={() => handleSupportItemClick('asasLivres')}
          >
            Asas Livres
          </div>
          <div
            className={`support-item ${selectedSection === 'ondaAquatica' ? 'active' : ''}`}
            onClick={() => handleSupportItemClick('ondaAquatica')}
          >
            Onda Aquática
          </div>
        </section>

        <section className="animal-title">
          <h2>Confira os animais residentes da ONG</h2>
        </section>

        <section className="animal-gallery" id="animal-gallery">
          {animals.map(animal => (
            <div key={animal.name} className="animal-item">
              <img src={animal.image} alt={animal.name} className="animal-image" />
              <div className="animal-info">
                <h3>{animal.name}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Doadores;
