const API_URL = "http://localhost:3001/user/";

class AuthService {
  async login(data) {
    const res = await fetch(API_URL + "login", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    const res_1 = await res.json();
    console.log(res_1);
    if (res_1.accessToken)
      localStorage.setItem("user", JSON.stringify(res_1.data));
    return res_1.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data) {
    return fetch(API_URL + "register", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
  }
}

export default new AuthService();
