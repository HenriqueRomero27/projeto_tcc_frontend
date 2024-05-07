import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Cake from "../assets/cake.svg";
import './PetCard.css';

interface Props {
    name: string;
    bday: string;
    picture: string;
    gender: string;
    location: string;
}

function PetCard({ name, bday, picture, gender, location }: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="pet-card">
            <div className="images">
                <button className={`favorite ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <img src={picture} alt="Pet Picture" aria-label="Foto do animal" className="petPicture" />
            </div>
            <div className="pet-informations">
                <div className="petNameLocation">
                    <p className="petName">{name} <img src={gender} alt="Pet Gender" className="petGender" /></p>
                    <p className="petLocation">{location}</p>
                </div>
                <div className="line"></div>
                <div className="containerBday">
                    <img src={Cake} alt="Cake" className="cake" />
                    <p className="petBDay">{bday}</p>
                </div>
            </div>
        </div>
    );
}

export default PetCard;
