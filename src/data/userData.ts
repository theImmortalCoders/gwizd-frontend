import { apiDomain } from "@/variables";
const getUser = async () => {
  const response = await fetch(`${apiDomain}/api/user/me`, {
    credentials: "include",
  });
  if (response.status === 401) {
    throw new Error("Unauthorized");
  }
  const user = await response.json();
  return user;
};
export default getUser;
