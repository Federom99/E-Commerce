import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userSession = localStorage.getItem("token");
    if (userSession) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({ msg: "All fields are required" });
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3001/user/login", {
        mail: email,
        contraseña: password,
      });

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setAlert({ msg: error.response.data.msg });
    }
  };

  const { msg } = alert;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 20 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
          <button style={{width: '100%'}} type="submit">Login</button>
          or
          <Link style={{textDecoration: 'none'}} to={"/newUser"}>Register</Link>
        </div>
      </form>

      {alert.msg && <p>{msg}</p>}
    </div>
  );
};

export default Login;
