import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Historyy() {
  const myCookies = cookies();
  if (!myCookies.get("JSESSIONID")) {
    redirect("/login");
  } else {
    redirect("/report");
  }

  return 0;
}
