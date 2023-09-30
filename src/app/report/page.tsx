'use client'
import {useState} from "react";
export default function report(){

    const [animals,setAnimals] = useState([])
    const [formData,setFormData] = useState({
        type: "",
        animal: "",
        photo: "",
        title: "",
        description: ""
    })
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/contact",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await response
        console.log(data);
    };

    // const handleGetAnimals = () => {
    //     const response = fetch
    //     )
    // }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Typ spotkania: </label>
                    <input
                        list={"type"}
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                    <datalist id={"type"}>
                        <option>Zwierze domowe</option>
                        <option>Potencjalnie niebezpieczne</option>
                        <option>dfl</option>
                    </datalist>
                </div>
                <div>
                    <label>Zwierze: </label>
                    <input
                        list={"animals"}
                        name="animal"
                        value={formData.animal}
                        onChange={handleChange}
                    />
                    <datalist id={"animals"}>
                        <option>Niedzwiedz</option>
                        <option>Dzik</option>
                        <option>Ptak</option>
                        <option>Lis</option>
                    </datalist>
                </div>
                <div>
                    <label>Zdjęcie: </label>
                    <input
                        type="file"
                        name="photo"
                        value={formData.photo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Tytuł: </label>
                    <input
                        type={"textbox"}
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Opis: </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button type={"submit"}>Wyślij</button>
                </div>
            </form>
        </main>
    )
}