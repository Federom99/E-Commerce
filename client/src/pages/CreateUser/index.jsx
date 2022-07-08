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
} from "./styles";

export default function NewUser() {
  const [newUser, setNewUser] = useState({});
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
        setAlert({ msg: error.response.data.msg, type: "error" });
      }
    } else {
      setAlert({ msg: "All fields are required", type: "error" });
    }
  };

  const { msg } = alert;

  return (
    <Div>
      <Header>
        <Title>Welcome user</Title>
      </Header>
      <Form onSubmit={handleSubmit}>
        <List>
          <Li>
            <Subtitle>Name</Subtitle>
            <Input type="text" name="name" onChange={handleChange}></Input>
            {errors && errors.name && errors.name}
          </Li>
          <Li>
            <Subtitle>LastName</Subtitle>
            <Input type="text" name="lastname" onChange={handleChange}></Input>
            {errors && errors.lastname && errors.lastname}
          </Li>
          <Li>
            <Subtitle>Email</Subtitle>
            <Input type="text" name="email" onChange={handleChange}></Input>
            {errors && errors.email && errors.email}
          </Li>
          <Li>
            <Subtitle>Password</Subtitle>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
            ></Input>
            {errors && errors.password && errors.password}
          </Li>
          <Li>
            <Subtitle>Adress</Subtitle>
            <Input type="text" name="adress" onChange={handleChange}></Input>
            {errors && errors.adress && errors.adress}
          </Li>
        </List>
        <Button type="submit">Submit</Button>

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
            <button
              style={{ width: "80%", margin: "0 auto" }}
              onClick={() => navigate("/login")}
            >
              Login
            </button>
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
    </Div>
  );
}
