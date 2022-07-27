import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsuarios } from "../../redux/actions/checkout";

import { useLocation } from "react-router-dom";
import Loading from "../../components/Loader";
import { login, loginGoogle } from "../../redux/actions/autenticacion";
import {
  ButtonLogIn,
  Div,
  Form,
  H2,
  Input,
  InputDiv,
  Label,
  List,
  Section,
} from "./styles";
import jwt_decode from "jwt-decode";

export default function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const bloqueados = useSelector((state) => state.checkout.usuariosFiltrados);
  // console.log(bloqueados)

  document.title = "Pro Ropa - Iniciar sesión";

  useEffect(() => {
    dispatch(getUsuarios());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const userSession = localStorage.getItem("user");
    if (userSession) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([mail, password].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", type: "error" });
      return;
    }
    const usuario = bloqueados.find((e) => e.mail === mail)
    if (usuario && usuario.bloqueado === true) {
      setAlert({ msg: "Usuario Bloqueado", type: "error" });
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

  const handleLogin = async (response) => {
    const userObject = await jwt_decode(response.credential);
    if (userObject) {
      dispatch(loginGoogle(userObject)).then((res) => {
        setLoading(false);
        if (!res.payload.error) {
          navigate("/");
          window.location.reload();
        }
        if (res.payload.error) {
          setAlert({ msg: res.payload.error, type: "error" });
        }
      });
    }
    // store returned user in a context?
  };

  return (
    <Div>
      <Section>
        <InputDiv>
          <Form onSubmit={handleSubmit}>
            <H2>
              Iniciar sesión
            </H2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <List>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <Label>
                    Email:
                  </Label>
                  <Input
                    type="text"
                    name="mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
              </List>
              <List>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <Label>
                    Contraseña:
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
              </List>
            </div>
            <div style={{ width: "100%" }}>
              <ButtonLogIn type="submit">Iniciar sesión</ButtonLogIn>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <GoogleLogin
                theme="filled_black"
                locale="es"
                text={"signin"}
                onSuccess={handleLogin}
                onError={(error) => console.log(error)}
              />
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
              <p>¿Aún no tienes cuenta?</p>

              <button
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  color: "blue",
                  fontSize: 15,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
              >
                Crear cuenta
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
                  cursor: "pointer",
                }}
                onClick={() => navigate("/olvide-password")}
              >
                Olvidé mi contraseña
              </button>
            </div>
          </Form>
        </InputDiv>
      </Section>
    </Div>
  );
}
