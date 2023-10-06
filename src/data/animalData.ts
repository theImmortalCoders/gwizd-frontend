import { apiDomain } from "@/variables";

const getAnimals = async (setAnimalList: Function) => {
  const response = await fetch(`${apiDomain}/api/animal`);
  const animals = await response.json();
  setAnimalList(
    animals.map((animal: Animal) => {
      return {
        id: animal.id,
        name: animal.name,
      };
    })
  );
};
export default getAnimals;
