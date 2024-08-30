import { useState } from "react";
import "./FindPet.css";
import "../../root.css";
import PetCard from "../../components/PetCard/PetCard";
import CatEmoji from "../../assets/catEmoji.svg";
import DogEmoji from "../../assets/dogEmoji.svg";
import Filter from "../../assets/filter.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { CreateModalPet } from "../../components/create-modal/CreateModalPet";
import { usePetData } from "../../hooks/usePetData";

function FindPet() {
    const { data } = usePetData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    console.log(data)
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
                    {data?.map(petData =>
                        <PetCard
                            key={petData.id}
                            name={petData.name} 
                            gender={petData.gender} 
                            bday={petData.bday} 
                            location={petData.location}
                            image={petData.image}
                        />
                    )}
                    {/* <PetCard name={"Pudim"} gender={Male} bday={"Fev 2022"} location={"Rio de Janeiro"} image={DogProfileImage}/> */}
                </div>
                {isModalOpen && <CreateModalPet />}
                <button onClick={handleOpenModal}>Novo</button>

            </div>
            <Footer />
        </>
    );

}

export default FindPet;
