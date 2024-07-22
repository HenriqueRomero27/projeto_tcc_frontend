import { useState } from "react"
import { usePetDataMutate } from "../../hooks/usePetDataMutate"
import { PetData } from "../../interfaces/PetData"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

export function CreateModalPet() {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState(0)
    const [coatColor, setCoatColor] = useState("")
    const [coatLength, setCoatLength] = useState("")
    const [situation, setSituation] = useState("")
    const [observation, setObservation] = useState("")
    const [behavior, setBehavior] = useState("")
    const [image, setImage] = useState("")
    const [bday, setBday] = useState("")
    const [location, setLocation] = useState("")
    const { mutate } = usePetDataMutate()

    const submit = () => {
        const petData: PetData = {
            name,
            breed,
            gender,
            age,
            coatColor,
            coatLength,
            situation,
            behavior,
            location,
            bday,
            image
        }
        mutate(petData)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo pet</h2>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName} />
                    <Input label="Raça" value={breed} updateValue={setBreed} />
                    <Input label="Gênero" value={gender} updateValue={setGender} />
                    <Input label="Idade" value={age} updateValue={setAge} />
                    <Input label="Localização" value={location} updateValue={setLocation} />
                    <Input label="Cor do Pelo" value={coatColor} updateValue={setCoatLength} />
                    <Input label="Tamanho do Pelo" value={coatLength} updateValue={setCoatColor} />
                    <Input label="Situação (Castrado)" value={situation} updateValue={setSituation} />
                    <Input label="Observação" value={observation} updateValue={setObservation} />
                    <Input label="Comportamento" value={behavior} updateValue={setBehavior} />
                    <Input label="Foto do Pet" value={image} updateValue={setImage} />
                    <Input label="Foto do Pet" value={bday} updateValue={setBday} />
                </form>
                <button onClick={submit} className="btn-secondary">Cadastrar Pet</button>
            </div>
        </div>
    )
}