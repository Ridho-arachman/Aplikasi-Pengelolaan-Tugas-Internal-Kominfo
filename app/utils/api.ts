import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.232.96:5000/api", // Ganti dengan IP jika di device
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
