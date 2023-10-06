const ReportRow = (props: { report: AnimalReport }) => {
  const rep = props.report;
  return (
    <tr>
      <td>{rep.title}</td>
      <td>{rep.description}</td>
      <td>{rep.reportType}</td>
      <td>{rep.animal.name}</td>
      <td>{rep.quantity}</td>
      <td>{rep.createdDate}</td>
    </tr>
  );
};

export default ReportRow;
