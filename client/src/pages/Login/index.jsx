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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/autenticacion";
import Loading from "../../components/Loader";

export default function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    const userSession = localStorage.getItem("token");
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

    // try {
    //   const { data } = await axios.post("http://localhost:3001/user/login", {
    //     mail: email,
    //     contraseña: password,
    //   });

    //   localStorage.setItem("token", data.token);
    //   navigate("/");
    // } catch (error) {
    //   setAlert({ msg: error.response.data.msg, type: "error" });
    // }
    dispatch(login({ mail, contraseña: password })).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  // const { msg } = alert;
  // let content;
  // if (error) {
  //   content = <div>{error}</div>;
  // }
  // if (loading) {
  //   content = (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

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
                  name="mail"
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
              {/* {content} */}
            </p>
          )}
        </InputDiv>
      </Section>
    </Div>
  );
}
