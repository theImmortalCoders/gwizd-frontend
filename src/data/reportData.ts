import { apiDomain } from "@/variables";

const getReports = async (user: User | undefined, setReports: Function) => {
  console.log(user);
  if (user && user.id) {
    const response = await fetch(`${apiDomain}/api/report/?userId=${user.id}`);
    const reports = await response.json();
    console.log(reports);
    setReports(
      reports.map((rep: AnimalReport) => ({
        id: rep.id,
        title: rep.title,
        description: rep.description,
        reportType: rep.reportType,
        animal: rep.animal,
        quantity: rep.quantity,
        createdDate: rep.createdDate,
      }))
    );
  } else {
    console.error("User or user ID is undefined");
  }
};
export default getReports;
