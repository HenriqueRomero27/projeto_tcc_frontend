// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import Cake from "../../assets/cake.svg";
// import './PetCard.css';

// interface Props {
//     name: string;
//     bday: string;
//     picture: string;
//     gender: string;
//     location: string;
// }

// function PetCard({ name, bday, picture, gender, location }: Props) {
//     const [isFavorite, setIsFavorite] = useState(false);

//     const toggleFavorite = () => {
//         setIsFavorite(!isFavorite);
//     };

//     return (
//         <div className="pet-card">
//             <div className="images">
//                 <button className={`favorite ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
//                     <FontAwesomeIcon icon={faHeart} />
//                 </button>
//                 <img src={picture} alt="Pet Picture" aria-label="Foto do animal" className="petPicture" />
//             </div>
//             <div className="pet-informations">
//                 <div className="petNameLocation">
//                     <p className="petName">{name} <img src={gender} alt="Pet Gender" className="petGender" /></p>
//                     <p className="petLocation">{location}</p>
//                 </div>
//                 <div className="line"></div>
//                 <div className="containerBday">
//                     <img src={Cake} alt="Cake" className="cake" />
//                     <p className="petBDay">{bday}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PetCard;

import React from "react"
import Favorite from "../../assets/heart.svg"
import Cake from "../../assets/cake.svg"
import "./PetCard.css";

interface props {
    name: string;
    bday: string;
    picture: string;
    gender: string;
    location: string;
}

export const PetCard = ({name, gender, bday, location, picture}: props): JSX.Element => {
  return (
    <div className="box">
      <div className="adoo">
        <div className="overlap-group">
          <img className="imagem-animal" alt="Imagem animal" src={picture} />
          <div className="rectangle" />
          <div className="nome-do-animal">{name}</div>
          <p className="localiza-oanimal"> {location}</p>
          <div className="data-nascimento">{bday}</div>
          <img className="linha-separacao" alt="Linha separacao" src="linha-separacao.svg" />
          <img className="genero-animal" alt="Genero animal" src={gender} />
          <img className="bolo" alt="Bolo" src={Cake} />
          <img src={Favorite} alt="" className="favorite" />
        </div>
      </div>
    </div>
  );
};
