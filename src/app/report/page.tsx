'use client'
import {useEffect, useState} from "react";
export default function report(){

    const [animalList,setAnimalList] = useState([])
    const [formData,setFormData] = useState({
        reportType: "",
        animalId: "",
        quantity: 0,
        title: "",
        description: "",
        location: {
            latitude: 0,
            longtitude: 0,
        },
    })
    // const getLocation = () =>{
    //     const success = (position: any) => {
    //         console.log(position.coords.latitude)
    //         formData.latitude
    //     }
    //     const error = () => {
    //         console.log("Error")
    //     }
    //
    //     navigator.geolocation.getCurrentPosition(success, error);
    // }
    const getAnimals = async () => {
        const response = await fetch("http://localhost:8080/api/animal")
        const animals = await response.json();
        setAnimalList(animals.map((animal: any) => {
            return  animal.name;
        }))
    }
    useEffect(() => {
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
        const response = await fetch("http://localhost:8080/api/report",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await response
        console.log(data);
        console.log("wykonało sie")
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Typ spotkania: </label>
                    <input
                        list={"type"}
                        name="reportType"
                        value={formData.reportType}
                        onChange={handleChange}
                    />
                    <datalist id={"type"}>
                        <option value={"SPOT"}></option>
                        <option value={"HOME"}></option>
                        <option value={"DANGER"}></option>
                    </datalist>
                </div>
                <div>
                    <label>Zwierze: </label>
                    <input
                        list={"animals"}
                        name="animal"
                        value={formData.animalId}
                        onChange={handleChange}
                    />
                    <datalist id={"animals"}>
                        {animalList.map((animalName) => {
                            return(
                                <option>{animalName}</option>
                            )
                        })}
                    </datalist>
                </div>
                <div>
                    <label>Ilość: </label>
                    <input
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