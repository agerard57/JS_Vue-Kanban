class TokenService {
  // Gets token from localStorage
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
  }

  // Gets all user's info
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // Sets all user's info
  setUser(user) {
    console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Deletes user's info from localStorage
  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
