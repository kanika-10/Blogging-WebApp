import axios from "axios";
import configData from "../config";

const instance = axios.create({
  baseURL: configData.URL,
});

instance.interceptors.request.use((config) => {
  const token = configData.token;
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;