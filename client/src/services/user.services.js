import authHeader from "./auth-header";

const API_URL = "http://localhost:3001/";

class UserService {
  getPublicContent() {
    return fetch(API_URL);
  }

  getUserBoard() {
    return fetch(API_URL + "user", { headers: authHeader() });
  }

  getAdminBoard() {
    return fetch(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
