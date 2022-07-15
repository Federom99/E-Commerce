import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  ErrorsText
} from "./styles";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loader";

export default function NewUser() {
  const dispatch = useDispatch();
  // const
  const [newUser, setNewUser] = useState({});
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const errorHandler = (data) => {
    let errors = {};
    if (!data.name) errors.name = "obligatory field";

    if (!data.lastname) errors.lastname = "obligatory field";

    if (!data.adress) errors.adress = "Obligatory field";

    if (!data.email) errors.email = "Obligatory field";
    if (data.email) {
      if (
        !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(data.email)
      )
        errors.email = "Sumbit a valid email";
    }

    if (!data.password) errors.password = "obligatory field";
    if (data.password) {
      if (
        !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
          data.password
        )
      )
        errors.password =
          "Password must have at least 1 upper case, 1 lower case, one number and 8 characters long";
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
          }
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
      setAlert({ msg: "All fields are required", type: "error" });
    }
  };

  const { msg } = alert;

  return (
<Div>
      <Header>
        <Title>Welcome</Title>
      </Header>
      <Form onSubmit={handleSubmit}>
        <List>
          <Li>
            <Subtitle>Name:</Subtitle>
            <Input type="text" name="name" onChange={handleChange}></Input>
            <ErrorsText>{errors && errors.name && errors.name}</ErrorsText>
          </Li>
          <Li>
            <Subtitle>LastName:</Subtitle>
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
            <Subtitle>Password:</Subtitle>
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
            <Subtitle>Address:</Subtitle>
            <Input type="text" name="adress" onChange={handleChange}></Input>
            <ErrorsText>{errors && errors.adress && errors.adress}</ErrorsText>
          </Li>
        </List>
        <Button type="submit">Register</Button>

        {alert.msg && alert.type === "success" && (
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
            <p onClick={() => navigate("/login")} style={{alignSelf: 'center', marginTop: 15, textDecoration: 'underline', fontSize: 18, color: '#2355f5', fontWeight: 'bold'}}>Login </p>
          </div>
        )}

        {alert.msg && alert.type === "error" && (
          <p
            style={{
              marginTop: 10,
              backgroundColor: "red",
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
