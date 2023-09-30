'use client'
export default function testFunction() {

    const getAnimals = async () => {
        const response = await fetch("http://localhost:8080/api/animal")
        const animals = await response.json();
        console.log(animals)
    }




    return (
        <button onClick={getAnimals}>button</button>
    );
}