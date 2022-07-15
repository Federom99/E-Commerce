import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loader";
import { Btn, Container, Letra, LetraB } from "./style";

function Confirmacion() {
  const navigation = useNavigate();
  const params = useParams();
  const [state, setState] = useState({
    load: false,
    error: null,
  });
  const { id } = params;
  console.log(id);

  const pagina = async () => {
    try {
      const url = `http://localhost:3001/user/confirmar/${id}`;
      const result = await fetch(url);
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
      <div style={{ display: "grid", justifyItems: "center" }}>
        <Container>
          <Letra color={"#f01f1f"}>Cuenta Confirmada</Letra>
          <LetraB color={"black"}>
            <br />
            <br />
            Gracias por su Registro
          </LetraB>
        </Container>
        <div>
          <Btn onClick={handleClick}>Login</Btn>
        </div>
      </div>
    );
  }

  return <Container>{content}</Container>;
}

export default Confirmacion;
