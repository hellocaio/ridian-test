import axios from "axios";
import config from "../config.json";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? config.dev.apiUrl
      : config.prod.apiUrl,
});

export default instance;
