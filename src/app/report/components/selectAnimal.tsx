import styles from "../page.module.css";

const SelectAnimal = (props: {
  formData: ReportAdd;
  handleChange: Function;
  animalList: Animal[];
}) => {
  return (
    <div className={styles.labelll}>
      <label>Zwierze: </label>
      <select
        className={styles.selectform}
        name="animalId"
        value={props.formData.animalId}
        onChange={(e) => props.handleChange(e)}
      >
        {props.animalList.map((animal: Animal) => {
          return (
            <option key={animal.id} value={animal.id}>
              {animal.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectAnimal;
