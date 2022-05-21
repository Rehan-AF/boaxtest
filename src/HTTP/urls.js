import axios from "axios";

export const BASE_URL = "http://boax.alshumaal.com";
export const boaxClient = axios.create({ baseURL: BASE_URL });
