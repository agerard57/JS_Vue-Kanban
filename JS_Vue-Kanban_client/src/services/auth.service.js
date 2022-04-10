import axiosInstance from "./axiosInstance";
import TokenService from "./token.service";

class AuthService {
  // Logs in
  async login({ username, password }) {
    const response = await axiosInstance.post("/login", {
      username,
      password,
    });
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    return response.data;
  }

  // Logs out
  logout() {
    TokenService.removeUser();
  }

  // Registers
  register({ username, email, password }) {
    return axiosInstance.post("/signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
