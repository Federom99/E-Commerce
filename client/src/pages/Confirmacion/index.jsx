import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loader";
import { Btn, Container, Letra, LetraB } from "./style";
import estilos from "./confirmacion.module.css";

function Confirmacion() {
  const navigation = useNavigate();
  const params = useParams();
  const [state, setState] = useState({
    load: false,
    error: null,
  });
  const { id } = params;
  console.log(id);

  document.title = "Pro Ropa - Confirmación";
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

  const pagina = async () => {
    try {
      const url = `http://localhost:3001/user/confirmar/${id}`;
      const result = await fetch(url, {
        credentials: "include",
      });
      const res = result.json();
      console.log(res);
      setState({ ...state, load: false });
    } catch (error) {
      setState({ ...state, error });
    }
  };

  const handleClick = () => {
    navigation("/login");
  };
  useEffect(() => {
    pagina();
  }, [id]);
  let content;

  if (state.load) {
    content = (
      <Container>
        <Loading />
      </Container>
    );
  } else if (state.error) {
    content = (
      <>
        <Container>{state.error}</Container>
      </>
    );
  } else {
    content = (
      <div id={estilos.divContenedor}>
          <Letra>Cuenta Confirmada</Letra>
          <LetraB>
            Gracias por su Registro
          </LetraB>
        <div>
          <Btn onClick={handleClick}>Login</Btn>
        </div>
      </div>
    );
  }

  return <Container>{content}</Container>;
}

export default Confirmacion;
