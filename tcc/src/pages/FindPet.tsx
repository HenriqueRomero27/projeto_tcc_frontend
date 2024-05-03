import "./FindPet.css"
import "../root.css"
import PetCard from "../components/PetCard"
import CatEmoji from "../assets/catEmoji.svg"
import DogEmoji from "../assets/dogEmoji.svg"
import Filter from "../assets/filter.svg"
import Male from "../assets/male.svg"
import Female from "../assets/female.svg"
import Heart from "../assets/heart.svg"
import DogProfileImage from "../assets/dogProfileImage.svg"


function FindPet() {
    return (
        <>
            <div className="findPet-container">
                <h2 className="title">Encontre um amigo</h2>
                <p id="category">Categorias</p>
                <div className="actionsButtons">
                    <button id="filter"><img src={Filter} alt="Filter" id="filter-img"/> Filtros</button>
                    <button id="cats"><img src={CatEmoji} alt="Cat" id="cat-img" /> Gatos</button>
                    <button id="dogs"><img src={DogEmoji} alt="Dog" id="dog-img"/> Cachorros</button>
                </div>

                <div className="line"></div>
                
                <div className="pets">
                    <PetCard name={"Pudim"} gender={Male} bday={"Fev 2022"} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    {/* <PetCard name={"Amora"} gender={Female} favorite={Heart} age={5} location={"Minas Gerais"} picture={DogProfileImage}/>
                    <PetCard name={"Tanio"} gender={Male} favorite={Heart} age={10} location={"São Paulo"} picture={DogProfileImage}/>
                    <PetCard name={"Jonas"} gender={Male} favorite={Heart} age={10} location={"Flamengo"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/>
                    <PetCard name={"Jiorgio"} gender={Male} favorite={Heart} age={10} location={"Rio de Janeiro"} picture={DogProfileImage}/> */}
                </div>
                
            </div>
        </>
    )
}

export default FindPet