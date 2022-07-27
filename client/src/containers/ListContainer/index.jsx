import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Compras from "../../components/Favoritos";

import Review from "../../components/Review";
import { Header, Li, List, Main, Section } from "./styles";

export default function ListContainer({ favProducts }) {
  const location = useLocation();

  const [state, setState] = useState({ soy: "Review" });
  useEffect(() => {
    const interes = location.pathname.split("/")[2];
    if (interes === "compras") {
      setState({ soy: "Reseñar" });
    } else {
      setState({ soy: "Favoritos" });
    }
  }, []);
  return (
    <>
      <Section>
        <List>
          <Li>
            <Header>{state.soy}</Header>
            <Main>{state.soy === "Reseñar" ? <Review /> : <Compras />}</Main>
          </Li>
        </List>
      </Section>
    </>
  );
}
