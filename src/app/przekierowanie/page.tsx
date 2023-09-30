import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Przekierowanie() {
  const myCookies = cookies();
  if (!myCookies.get("JSESSIONID")) {
    redirect("/login");
  } else {
    redirect("/achievement");
  }

  return 0;
}
