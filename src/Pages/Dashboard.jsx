import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer

export default function Dashboard() {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadImage = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:3001/upload", formData)
      .then(() => {})
      .catch((err) => {
        console.log("Error:", err);
        return toast.error("Error uploading image");
      });

    toast.success("Image uploaded successfully");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="file"
        className="mb-4"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-32 rounded"
        onClick={handleUploadImage}
      >
        Upload Image
      </button>
      <ToastContainer /> {/* Add the ToastContainer component here */}
    </div>
  );
}
