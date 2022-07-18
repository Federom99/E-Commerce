
import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  ButtonLogIn
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/autenticacion";
import Loading from "../../components/Loader";
import { login } from "../../redux/actions/autenticacion";
import { Div, Form, Input, InputDiv, List, Section } from "./styles";

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

  const handleLogin = async (googleData) => {
    console.log(googleData);
    // const res = await fetch("http://localhost:3001/v1/auth/google", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // store returned user in a context?
  };

  return (
    <Div>
      <Section>
        <InputDiv>
          <Form onSubmit={handleSubmit}>
            <h2
              style={{
                textAlign: "center",
                color: "#252525",
              }}
            >
              Iniciar sesión
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
                    Contraseña:
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
              <ButtonLogIn type="submit">
                Iniciar sesión
              </ButtonLogIn>
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <GoogleLogin
                text="Ingresar con Google"
                onSuccess={handleLogin}
                onError={handleLogin}
              />
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
