import { apiDomain } from "@/variables";

const getReportsByUser = async (
  user: User | undefined,
  setReports: Function
) => {
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

const getActiveReports = async (setReports: Function) => {
  const response = await fetch(`${apiDomain}/api/report?isActive=true`);
  const reports = await response.json();
  setReports(
    reports.map((report: AnimalReport) => {
      return {
        type: report.reportType,
        location: report.location,
      };
    })
  );
};

const sendReport = async (report: ReportAdd) => {
  const response = await fetch(`${apiDomain}/api/report`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(report),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 400) {
    console.log(response.json());
  } else {
    window.location.href = "/";
  }
};

export { getReportsByUser, getActiveReports, sendReport };
