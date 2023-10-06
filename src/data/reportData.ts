import { apiDomain } from "@/variables";

const getReports = async (user: User | undefined, setReports: Function) => {
  if (user && user.id) {
    const response = await fetch(`${apiDomain}/api/report/?userId=${user.id}`);
    const reports = await response.json();
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
    throw Error("User undefined.");
  }
};
export default getReports;
