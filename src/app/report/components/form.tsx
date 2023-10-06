import styles from "../page.module.css";

const ReportForm = (props: { formData: ReportAdd; handleChange: Function }) => {
  return (
    <>
      <div className={styles.labelll}>
        <label>Ilość: </label>
        <input
          className={styles.selectform}
          min={1}
          type="number"
          name="quantity"
          value={props.formData.quantity}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div className={styles.labelll}>
        <label>Tytuł: </label>
        <input
          className={styles.selectform}
          type={"textbox"}
          name="title"
          value={props.formData.title}
          onChange={(e) => props.handleChange(e)}
        />
      </div>
      <div className={styles.labelll}>
        <label>Opis: </label>
        <textarea
          className={styles.selectformtextarea}
          name="description"
          value={props.formData.description}
          onChange={(e) => props.handleChange(e)}
        ></textarea>
      </div>
    </>
  );
};
export default ReportForm;
