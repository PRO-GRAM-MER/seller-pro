import axios from "axios";
import { baseUrl, mode, role, uploadFile } from "../config/config";
import { version } from "react";

export const uploadImageUrl = (category) =>
  `${baseUrl}${version}${mode}${role}/${category}/${uploadFile}`;

export const uploadImageRequest = async (file, category) => {
  const formData = new FormData();
  formData.append("uploaded_file", file);
  try {
    const response = await axios.post(uploadImageUrl(category), formData);

    console.log("Upload successful:", uploadImageUrl);

    return response;
  } catch (error) {
    throw error;
  }
};
