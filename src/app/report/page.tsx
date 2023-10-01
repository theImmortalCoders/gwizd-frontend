"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function report() {
  const [animalList, setAnimalList] = useState([]);
  const [formData, setFormData] = useState({
    reportType: "SPOT",
    location: {
      longitude: 0,
      latitude: 0,
    },
    animalId: 1,
    quantity: 1,
    title: "",
    description: "",
  });
  const getLocation = () => {
    const success = (position: any) => {
      formData.location.latitude = position.coords.latitude;
      formData.location.longitude = position.coords.longitude;
    };
    const error = () => {
      console.log("Error");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };
  const getAnimals = async () => {
    const response = await fetch("https://api.gwizd.online/api/animal");
    const animals = await response.json();
    setAnimalList(
      animals.map((animal: any) => {
        return [animal.name, animal.id];
      })
    );
  };
  useEffect(() => {
    getLocation();
    getAnimals();
  }, []);
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
    console.log(JSON.stringify(formData));
    const response = await fetch("http://localhost:8080/api/report", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response;
    window.location.href = "/";
  };

  return (
    <main className={styles.main}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <div className={styles.header}>Formularz zgłoszeniowy</div>
          <form onSubmit={handleSubmit} className={styles.text}>
            <div className={styles.labelll}>
              <label>Typ spotkania: </label>
              <select
                className={styles.selectform}
                name="reportType"
                value={formData.reportType}
                onChange={() => handleChange}
              >
                <option className={styles.selectform} value={"SPOT"}>
                  Dzikie Zwierze{" "}
                </option>
                <option className={styles.selectform} value={"HOME"}>
                  Zwierzę Domowe
                </option>
                <option className={styles.selectform} value={"DANGER"}>
                  Zwierzę w niebezpiecznym miejscu
                </option>
              </select>
            </div>
            <div className={styles.labelll}>
              <label>Zwierze: </label>
              <select
                className={styles.selectform}
                name="animalId"
                value={formData.animalId}
                onChange={() => handleChange}
              >
                {animalList.map((animal) => {
                  return (
                    <option key={animal[1]} value={animal[1]}>
                      {animal[0]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.labelll}>
              <label>Ilość: </label>
              <input
                className={styles.selectform}
                min={1}
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className={styles.labelll}>
              <label>Tytuł: </label>
              <input
                className={styles.selectform}
                type={"textbox"}
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className={styles.labelll}>
              <label>Opis: </label>
              <textarea
                className={styles.selectformtextarea}
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button className={styles.submitbutton} type={"submit"}>
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
