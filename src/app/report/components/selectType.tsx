import styles from "../page.module.css";

const SelectType = (props: {
  formData: ReportAdd;
  handleChange: Function;
  reportTypes: ReportType[];
}) => {
  return (
    <div className={styles.labelll}>
      <label>Typ spotkania: </label>
      <select
        className={styles.selectform}
        name="reportType"
        value={props.formData.reportType}
        onChange={(e) => props.handleChange(e)}
      >
        {props.reportTypes.map((report: ReportType) => {
          return (
            <option
              key={report.value}
              className={styles.selectform}
              value={report.value}
            >
              {report.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default SelectType;
