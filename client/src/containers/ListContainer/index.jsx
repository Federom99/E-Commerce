import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Compras from "../../components/Favoritos";

import Review from "../../components/Review";
import { Header, Li, List, Main, Section } from "./styles";

export default function ListContainer({ theme }) {
  // console.log(theme);
  const location = useLocation();

  const [state, setState] = useState({ soy: "Review" });
  useEffect(() => {
    const interes = location.pathname.split("/")[2];
    if (interes === "compras") {
      setState({ soy: "Compras" });
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
            <Main>
              {state.soy === "Compras" ? (
                <Review theme={theme} />
              ) : (
                <Compras theme={theme} />
              )}
            </Main>
          </Li>
        </List>
      </Section>
    </>
  );
}
