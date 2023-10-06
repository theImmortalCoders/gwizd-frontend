import { cookies } from "next/headers";

const ReportButton = () => {
  var redirect = "";
  const myCookies = cookies();
  if (!myCookies.get("JSESSIONID")) {
    redirect = "/login";
  } else {
    redirect = "/report";
  }
  return (
    <a href={redirect}>
      <button>Widzę zwierzę!</button>
    </a>
  );
};
export default ReportButton;
