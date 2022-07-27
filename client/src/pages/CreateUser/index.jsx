import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsuarios } from "../../redux/actions/checkout";
import {
  Div,
  Form,
  Header,
  Input,
  Subtitle,
  Title,
  Li,
  List,
  Button,
  ErrorsText,
  Register,
} from "./styles";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loader";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function NewUser() {
  const dispatch = useDispatch();
  // const
  const [newUser, setNewUser] = useState({});
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const bloqueados = useSelector((state) => state.checkout.usuariosFiltrados);
  console.log(bloqueados)

  useEffect(() => {
    dispatch(getUsuarios());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  document.title = "Pro Ropa - Registrarse";
    

  const errorHandler = (data) => {
    let errors = {};
    if (!data.name) errors.name = "Campo requerido";

    if (!data.lastname) errors.lastname = "Campo requerido";

    if (!data.adress) errors.adress = "Campo requerido";

    if (!data.email) errors.email = "Campo requerido";
    if (data.email) {
      if (
        !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(data.email)
      )
        errors.email = "Mail inválido";
    }

    if (!data.password) errors.password = "Campo requerido";
    if (data.password) {
      if (
        !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
          data.password
        )
      )
        errors.password =
          "La contraseña debe tener al menos 1 letra mayúscula, 1 minúscula, 1 número y 8 caracteres de largo";
    }

    if (!data.repeatPassword) errors.repeatPassword = "Campo requerido";
    if (data.password !== data.repeatPassword) {
      errors.repeatPassword = "Las contraseñas deben ser iguales";
    }

    return errors;
  };

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
    setErrors(
      errorHandler({
        ...newUser,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const usuario = bloqueados.find((e) => e.mail === newUser.email)
    if (usuario && usuario.bloqueado === true) {
      setAlert({ msg: "Usuario Bloqueado", type: "error" });
      return;
    }
    if (!Object.keys(errors).length && Object.keys(newUser).length) {
      try {
        const { data } = await axios.post(
          "http://localhost:3001/user/register",
          {
            nombre: newUser.name,
            apellido: newUser.lastname,
            mail: newUser.email,
            contraseña: newUser.password,
            direccion: newUser.adress,
          }, { withCredentials: true }
        );

        setAlert({ msg: data.msg, type: "success" });
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
      } catch (error) {
        if (error.response.data.msg) {
          setAlert({ msg: error.response.data.msg, type: "error" });
        } else {
          setAlert({ msg: error.message });
        }
      }
    } else {
      setAlert({ msg: "Debes completar todos los campos", type: "error" });
    }
  };

  const { msg } = alert;

  const handleLogin = async (response) => {
    const userObject = await jwt_decode(response.credential);
    console.log(userObject);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/user/register-google",
        {
          user: userObject,
        }, { withCredentials: true }
      );

      setAlert({ msg: data.msg, type: "success-google" });
    } catch (error) {
      console.log(error);
      if (error.response.data.msg) {
        setAlert({ msg: error.response.data.msg, type: "error" });
      } else {
        setAlert({ msg: error.message });
      }
    }
  };

  return (
    <Div>
      <Header>
        <Title>¡Bienvenido!</Title>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Register>
          Registrarse
        </Register>
        <List>
          <Li>
            <Subtitle>Nombre:</Subtitle>
            <Input type="text" name="name" onChange={handleChange}></Input>
            <ErrorsText>{errors && errors.name && errors.name}</ErrorsText>
          </Li>
          <Li>
            <Subtitle>Apellido:</Subtitle>
            <Input type="text" name="lastname" onChange={handleChange}></Input>
            <ErrorsText>
              {errors && errors.lastname && errors.lastname}
            </ErrorsText>
          </Li>
          <Li>
            <Subtitle>Email:</Subtitle>
            <Input type="text" name="email" onChange={handleChange}></Input>
            <ErrorsText>{errors && errors.email && errors.email}</ErrorsText>
          </Li>
          <Li>
            <Subtitle>Contraseña:</Subtitle>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
            ></Input>
            <ErrorsText>
              {errors && errors.password && errors.password}
            </ErrorsText>
          </Li>
          <Li>
            <Subtitle>Repetir Contraseña:</Subtitle>
            <Input
              type="password"
              name="repeatPassword"
              onChange={handleChange}
            ></Input>
            <ErrorsText>
              {errors && errors.repeatPassword && errors.repeatPassword}
            </ErrorsText>
          </Li>
          <Li>
            <Subtitle>Dirección:</Subtitle>
            <Input type="text" name="adress" onChange={handleChange}></Input>
            <ErrorsText>{errors && errors.adress && errors.adress}</ErrorsText>
          </Li>
        </List>
        <Button type="submit">Registrarse</Button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <GoogleLogin
            theme="filled_black"
            text="continue_with"
            locale="es"
            useOneTap
            onSuccess={handleLogin}
            onError={(error) => console.log(error)}
          />
        </div>

        {(alert.msg && alert.type === "success") ||
          (alert.type === "success-google" && (
            <div
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <p
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  width: "80%",
                  margin: "0 auto",
                  textAlign: "center",
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 5,
                }}
              >
                {msg}
              </p>
              <p
                onClick={() => navigate("/login")}
                style={{
                  alignSelf: "center",
                  marginTop: 15,
                  textDecoration: "underline",
                  fontSize: 18,
                  color: "#2355f5",
                  fontWeight: "bold",
                }}
              >
                Login{" "}
              </p>
            </div>
          ))}

        {alert.msg && alert.type === "error" && (
          <p
            style={{
              marginTop: 10,
              backgroundColor: "red",
              color: "#fff",
              width: "80%",
              margin: "15px auto",
              textAlign: "center",
              paddingTop: 5,
              paddingBottom: 5,
              borderRadius: 5,
            }}
          >
            {msg}
          </p>
        )}
      </Form>
      {alert.msg && alert.type === "success" && (
        <p
          style={{
            backgroundColor: "red",
            paddingBottom: 15,
            paddingTop: 15,
            paddingRight: 10,
            paddingLeft: 10,
            fontWeight: "bold",
            color: "white",
            borderRadius: 5,
            fontSize: 15,
            marginBottom: 20,
          }}
        >
          Hemos enviado un email a {newUser.email} para comprobar la cuenta
        </p>
      )}
    </Div>
  );
}
