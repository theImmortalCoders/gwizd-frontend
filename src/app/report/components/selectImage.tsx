import sendImage from "@/data/imageData";
import { useState } from "react";

const SelectImage = (props: { handleChange: Function }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageUrl = await sendImage(selectedFile);
      props.handleChange(imageUrl);
    }
  };

  return (
    <>
      {selectedImage && (
        <img
          alt="not found"
          width={"250px"}
          src={URL.createObjectURL(selectedImage)}
        />
      )}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          handleFileChange(event);
        }}
      />
    </>
  );
};
export default SelectImage;
