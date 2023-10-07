import { apiDomain } from "@/variables";

const sendImage = async (file: File) => {
  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${apiDomain}/images/`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    if (response.ok) {
      const name = await response.text();
      return name;
    } else {
      console.error(response.json());
    }
  }
};

export default sendImage;
