"use client";
import React, { useState } from "react";
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

const animalData = [
  { name: "Kot", population: 10000, threatLevel: "Niskie" },
  { name: "Pies", population: 8000, threatLevel: "Niskie" },
  { name: "Słoń", population: 5000, threatLevel: "Wysokie" },
  { name: "Kangur", population: 3000, threatLevel: "Średnie" },
  { name: "Pingwin", population: 2000, threatLevel: "Niskie" },
];

export default function Statistic() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPopulation, setFilterPopulation] = useState("");
  const [filterThreatLevel, setFilterThreatLevel] = useState("");

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

          <div className={styles.filters}>
            <TextField
              label="Szukaj"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <FormControl variant="outlined">
              <InputLabel>Liczba populacji</InputLabel>
              <Select
                value={filterPopulation}
                onChange={(e) => setFilterPopulation(e.target.value)}
                label="Liczba populacji"
              >
                <MenuItem value="">Wszystkie</MenuItem>
                <MenuItem value="1000">Powyżej 1000</MenuItem>
                <MenuItem value="5000">Powyżej 5000</MenuItem>
                <MenuItem value="10000">Powyżej 10000</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel>Stopień zagrożenia</InputLabel>
              <Select
                value={filterThreatLevel}
                onChange={(e) => setFilterThreatLevel(e.target.value)}
                label="Stopień zagrożenia"
              >
                <MenuItem value="">Wszystkie</MenuItem>
                <MenuItem value="Niskie">Niskie</MenuItem>
                <MenuItem value="Średnie">Średnie</MenuItem>
                <MenuItem value="Wysokie">Wysokie</MenuItem>
              </Select>
            </FormControl>
          </div>

          <ul className={styles.animalList}>
            {filteredData.map((animal, index) => (
              <li key={index}>
                <Typography variant="h5">{animal.name}</Typography>
                <p>Liczba populacji: {animal.population}</p>
                <p>Stopień zagrożenia: {animal.threatLevel}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
