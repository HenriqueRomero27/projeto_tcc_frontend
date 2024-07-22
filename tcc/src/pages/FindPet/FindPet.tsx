import { useState } from "react";
import "./FindPet.css";
import "../../root.css";
import { PetCard } from "../../components/PetCard/PetCard";
import CatEmoji from "../../assets/catEmoji.svg";
import DogEmoji from "../../assets/dogEmoji.svg";
import Filter from "../../assets/filter.svg";
import Male from "../../assets/male.svg";
import Female from "../../assets/female.svg";
import Heart from "../../assets/heart.svg";
import DogProfileImage from "../../assets/dogProfileImage.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { PetData } from "../../interfaces/PetData";
import { usePetDataMutate } from "../../hooks/usePetDataMutate";
import { CreateModalPet } from "../../components/create-modal/CreateModalPet";

function FindPet() {
    const { data } = usePetDataMutate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Verifica se data.data está definido antes de usar map
    const petDataList = data?.data || [];

    return (
        <>
            <Header />
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
                    {petDataList.map((petData: PetData) => (
                        <PetCard
                            key={petData.id}
                            name={petData.name} 
                            gender={petData.gender} 
                            bday={petData.bday} 
                            location={petData.location}
                            image={petData.image}
                        />
                    ))}
                    {isModalOpen && <CreateModalPet />}
                    <PetCard name={"Pudim"} gender={Male} bday={"Fev 2022"} location={"Rio de Janeiro"} image={DogProfileImage}/>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default FindPet;
