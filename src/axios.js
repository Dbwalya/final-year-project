import axios from "axios";

const sendUserData = axios.post("/", {});
const instance = axios.create({
  baseUrl: "...",
});

export default instance;
