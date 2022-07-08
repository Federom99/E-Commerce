import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
export default function Login() {
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
      setAlert({ msg: "All fields are required", type: "error" });
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
      setAlert({ msg: error.response.data.msg, type: "error" });
    }
  };

  const { msg } = alert;

  return (
    <Div>
      <Section>
        <DivBtn>
          <Google>Sign in with Google</Google>
          <Gith>Sign in with Github</Gith>
        </DivBtn>
        <InputDiv>
          <Form onSubmit={handleSubmit}>
            <List>
              <li>
                <Input
                  placeholder="e-mail"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <Input
                  placeholder="password"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
            </List>

            <Blist>
              <li>
                <button onClick={() => navigate("/register")}> Sign up</button>
              </li>
              <li>
                <button type="submit">Log in</button>
              </li>
            </Blist>
          </Form>

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
              {msg}
            </p>
          )}
        </InputDiv>
      </Section>
    </Div>
  );
}
