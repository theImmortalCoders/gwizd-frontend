'use client'
import {useEffect, useState} from "react";
export default function report(){

    const [animalList,setAnimalList] = useState([])
    const [formData,setFormData] = useState({
        reportType: "SPOT",
        location: {
            longitude: 0,
            latitude: 0
        },
        animalId: 1,
        quantity: 1,
        title: "",
        description: "",
    })
    const getLocation = () =>{
        const success = (position: any) => {
            formData.location.latitude = position.coords.latitude
            formData.location.longitude = position.coords.longitude
        }
        const error = () => {
            console.log("Error")
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }
    const getAnimals = async () => {
        const response = await fetch("http://localhost:8080/api/animal")
        const animals = await response.json();
        setAnimalList(animals.map((animal: any) => {
            return  [animal.name, animal.id];
        }))
    }
    useEffect(() => {
        getLocation()
        getAnimals()
    },[])
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
        console.log(JSON.stringify(formData))
        const response = await fetch("http://localhost:8080/api/report",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await response
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Typ spotkania: </label>
                    <select
                        name="reportType"
                        value={formData.reportType}
                        onChange={handleChange}
                    >
                        <option value={"SPOT"}>opcja 1</option>
                        <option value={"HOME"}>opcja 2</option>
                        <option value={"DANGER"}>opcja 3</option>
                    </select>
                </div>
                <div>
                    <label>Zwierze: </label>
                    <select
                        name="animalId"
                        value={formData.animalId}
                        onChange={handleChange}
                    >
                        {animalList.map((animal) => {
                            return(
                                <option key={animal[1]} value={animal[1]}>{animal[0]}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Ilość: </label>
                    <input
                        min={1}
                        type="number"
                        name="quantity"
                        value={formData.quantity}
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