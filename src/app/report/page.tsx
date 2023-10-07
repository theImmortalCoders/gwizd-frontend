"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import getLocation from "@/data/locationData";
import getAnimals from "@/data/animalData";
import { sendReport } from "@/data/reportData";
import { reportTypes } from "@/data/reportTypes";
import SelectType from "./components/selectType";
import SelectAnimal from "./components/selectAnimal";
import ReportForm from "./components/form";
import SelectImage from "./components/selectImage";

export default function report() {
  const [animalList, setAnimalList] = useState<Animal[]>([]);
  const [formData, setFormData] = useState<ReportAdd>({
    reportType: "SPOT",
    location: {
      id: 0,
      latitude: "",
      longitude: "",
    },
    animalId: 1,
    quantity: 1,
    title: "",
    description: "",
    photo: "",
  });

  useEffect(() => {
    formData.location = getLocation();
    getAnimals(setAnimalList);
  }, []);

  const handleImageChange = async (imageUrl: string) => {
    formData.photo = imageUrl;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendReport(formData);
    console.log(formData);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>Formularz zgłoszeniowy</div>
      <form onSubmit={handleSubmit} className={styles.text}>
        <SelectImage handleChange={handleImageChange} />
        <SelectType
          formData={formData}
          handleChange={handleChange}
          reportTypes={reportTypes}
        />
        <SelectAnimal
          formData={formData}
          handleChange={handleChange}
          animalList={animalList}
        />
        <ReportForm formData={formData} handleChange={handleChange} />
        <div>
          <button className={styles.submitbutton} type={"submit"}>
            Wyślij
          </button>
        </div>
      </form>
    </main>
  );
}
