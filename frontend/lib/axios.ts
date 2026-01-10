import axios from "axios";

const environment = process.env.NEXT_PUBLIC_NODE_ENV;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
  baseURL: environment === "production" ? `${BASE_URL}/api/v1`: "http://localhost:4000/api/v1",
  withCredentials: true,
});
