import React from "react";
import axios from "axios";

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:3000/upload", formData)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => e.target.files[0]} />
      <button onClick={handleUploadImage}>Upload Image</button>
    </div>
  );
}
