"use client";
import React, { useEffect, useState } from "react";
import { apiDomain } from "../variables";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import styles from "./page.module.css";

export default function Statistic() {
  const [statData, setStatData] = useState({
    spotType: "",
    myId: 0,
  });
  const [dane, setDane] = useState([]);
  const animalData = [
    { name: "Kot", population: 10000, threatLevel: "Niskie" },
    { name: "Pies", population: 8000, threatLevel: "Niskie" },
    { name: "Słoń", population: 5000, threatLevel: "Wysokie" },
    { name: "Kangur", population: 3000, threatLevel: "Średnie" },
    { name: "Pingwin", population: 2000, threatLevel: "Niskie" },
  ];

  const getByReportType = async () => {
    const response = await fetch(
      `${apiDomain}/api/report?reportType=${statData.spotType}&animalId=${statData.myId}`
    );
    const wyniki = await response.json();
    setDane(
      wyniki.map((wynik: any) => {
        return wynik;
      })
    );
    console.log(wyniki);
  };
  useEffect(() => {
    getByReportType();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [animalList, setAnimalList] = useState([]);
  const [filterPopulation, setFilterPopulation] = useState("");
  const [filterThreatLevel, setFilterThreatLevel] = useState("");

  const getAnimals = async () => {
    const response = await fetch(`${apiDomain}/api/animal`);
    const animals = await response.json();
    setAnimalList(
      animals.map((animal: any) => {
        return [animal.name, animal.id];
      })
    );
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setStatData({
      ...statData,
      [name]: value,
    });
  };

  const filteredData = animalData.filter((animal) => {
    return (
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterPopulation === "" ||
        animal.population >= parseInt(filterPopulation)) &&
      (filterThreatLevel === "" || animal.threatLevel === filterThreatLevel)
    );
  });

  return (
    <div className={styles.statisticpagemain}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
          <Typography variant="h3">Statystyki</Typography>

          <div>
            {/*
            <TextField
              className={styles.filters}
              label="Szukaj"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            */}

            <FormControl variant="outlined" className={styles.filters}>
              <InputLabel>Liczba populacji</InputLabel>
              <select
                className={styles.selectform}
                name="reportType"
                value={statData.spotType}
                onChange={handleChange}
              >
                {animalList.map((animal) => {
                  return (
                    <MenuItem key={animal[1]} value={animal[1]}>
                      {animal[0]}
                    </MenuItem>
                  );
                })}
              </select>
            </FormControl>
            {/*
            <FormControl variant="outlined" className={styles.filters}>
              <InputLabel>Stopień zagrożenia</InputLabel>
              <Select
                className={styles.selectform}
                value={statData.spotType}
                onChange={handleChange}
                label="Stopień zagrożenia"
              >
                <MenuItem value="SPOT">spot</MenuItem>
                <MenuItem value="HOME">homee</MenuItem>
                <MenuItem value="DANGER">dendżer</MenuItem>
              </Select>
            </FormControl>
          */}
          </div>

          <ul className={styles.animalList}>
            {dane.map((obiekt: any) => {
              return <li>{obiekt.animal.name}</li>;
            })}
          </ul>
          <button
            className={styles.buttonf}
            name={"filtruj"}
            onClick={getByReportType}
          >
            filtruj
          </button>
        </div>
      </div>
    </div>
  );
}
