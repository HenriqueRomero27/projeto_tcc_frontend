import "./PetCard.css"
import "./DogImage"
interface props {
    name: string,
    age: number,
    picture: string,
    favorite: string,
    gender: string,
    location: string;
}

function PetCard({name, age, picture, favorite, gender, location}: props) {
    return (
        <>
            <div className="pet-card">
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
            </div>
        </>
    )
}

export default PetCard