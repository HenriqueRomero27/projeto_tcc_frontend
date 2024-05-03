import "./PetCard.css"
import Cake from "../assets/cake.svg"
interface props {
    name: string,
    bday: string,
    picture: string,
    favorite: string,
    gender: string,
    location: string;
}

function PetCard({name, bday, picture, favorite, gender, location}: props) {
    return (
        <>
            {/* <div className="pet-card">
                <img src={picture} alt="Pet Picture" className="petPicture" />
                <div className="containers">
                    <div className="container1">
                        <p className="petName">{name}<img src={gender} alt="Pet Gender" className="petGender" /></p>
                        <img src={favorite} alt="Favorite Pet" className="favoritePet" />
                    </div>
                    <div className="container2">
                        <p className="petAge petLocation">{age} Anos | {location}</p>
                    </div>
                </div>
            </div> */}
            <div className="pet-card">
                <div className="images">
                    <img src={picture} alt="Pet Picture" aria-label="Foto do animal" className="petPicture" />
                    <img src={favorite} alt="Button for Favorite an animal" aria-label="Botão para favoritar um animal" className="favorite" />
                </div>
                <div className="pet-informations">
                    <p className="petName">{name} <img src={gender} alt="Pet Gender" className="petGender" /></p>
                    <p className="petLocation">{location}</p>
                    <div className="line"></div>
                    <div className="containerBday">
                        <img src={Cake} alt="Cake" className="cake" />
                        <p className="petBDay">{bday}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PetCard