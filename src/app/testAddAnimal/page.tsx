'use client'
import {useState} from "react";
export default function addAnimal() {
    const [formData,setFormData] = useState({
        name: "",
        description: "",
        photo: "",
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
        const response = await fetch("http://localhost:8080/api/animal",{
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


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>name: </label>
                <input
                    name={"name"}
                    type={"text"}
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>description: </label>
                <input
                    name={"description"}
                    type={"text"}
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    name={"photo"}
                    type={"file"}
                    value={formData.photo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button type={"submit"}>Wyślij</button>
            </div>
        </form>
    );
}
