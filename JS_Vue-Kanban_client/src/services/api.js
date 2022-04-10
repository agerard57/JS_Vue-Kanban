import axios from "axios";
import TokenService from "./token.service";

const apiHeaders = () => {
  const token = TokenService.getLocalAccessToken();
  console.log(token);
  if (token) {
    return {
      "Content-Type": "application/json",
      "x-access-token": token,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: apiHeaders(),
});

export default axiosInstance;
