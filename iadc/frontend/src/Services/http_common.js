import axios from "axios";

export default axios.create({
  baseURL: "localhost:80/api",
  headers: {
    "Content-type": "application/json"
  }
});