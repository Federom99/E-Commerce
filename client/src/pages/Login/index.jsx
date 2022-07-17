import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Div,
  DivBtn,
  Input,
  List,
  Google,
  Gith,
  InputDiv,
  Section,
  Form,
  Blist,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/autenticacion";
import Loading from "../../components/Loader";

export default function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem("user");
    if (userSession) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([mail, password].includes("")) {
      setAlert({ msg: "All fields are required", type: "error" });
      return;
    }
    setLoading(true);
    dispatch(login({ mail, contraseña: password })).then((res) => {
      setLoading(false);
      if (!res.payload.error) {
        navigate("/");
        window.location.reload();
      }
      if (res.payload.error) {
        setAlert({ msg: res.payload.error, type: "error" });
      }
    });
  };

  return (
    <Div>
      <Section>
        <InputDiv>
          <Form onSubmit={handleSubmit}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "800",
                color: "#252525",
              }}
            >
              Login
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <List>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{ color: "#252525", fontWeight: "bold" }}
                    htmlFor="mail"
                  >
                    Email:
                  </label>
                  <Input
                    type="text"
                    name="mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
              </List>
              <List>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "#252525", fontWeight: "bold" }}>
                    Password:
                  </label>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
              </List>
            </div>
            <div style={{ width: "100%" }}>
              <button
                style={{
                  width: "100%",
                  padding: 8,
                  fontSize: 15,
                  fontWeight: "bold",
                  borderRadius: 5,
                  backgroundColor: "blue",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Login
              </button>
            </div>
            {alert.msg && alert.type === "error" && (
              <p
                style={{
                  marginTop: 20,
                  fontSize: 13,
                  backgroundColor: "red",
                  color: "#fff",
                  textAlign: "center",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {alert.msg}
              </p>
            )}

            {loading && (
              <>
                <Loading />
              </>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
              }}
            >
              <p>Don't have a account?</p>

              <button
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  color: "blue",
                  fontSize: 15,
                }}
                onClick={() => navigate("/register")}
              >
                Create Account
              </button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
              }}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  color: "blue",
                  fontSize: 15,
                }}
                onClick={() => navigate("/olvide-password")}
              >
                I forget my password
              </button>
            </div>
          </Form>
        </InputDiv>
      </Section>
    </Div>
  );
}
