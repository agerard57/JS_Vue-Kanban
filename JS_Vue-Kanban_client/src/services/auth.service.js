import api from "./api";
import TokenService from "./token.service";

class AuthService {
  async login({ username, password }) {
    const response = await api.post("/login", {
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
    return api.post("/signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
