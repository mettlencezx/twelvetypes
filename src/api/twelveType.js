import axios from "axios";

export default axios.create({
  baseURL: "https://api.individualogist.com/api"
  //baseURL: "http://127.0.0.1:8000/api"
});