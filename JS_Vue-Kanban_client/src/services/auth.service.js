import axiosInstance from "./axiosInstance";
import TokenService from "./token.service";

class AuthService {
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

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password }) {
    return axiosInstance.post("/signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
