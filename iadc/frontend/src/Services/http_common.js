import axios from "axios";

export default axios.create({
  baseURL: "https://buildbackend.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});