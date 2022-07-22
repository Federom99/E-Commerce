import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import Review from "../../components/Review";
import { Header, Li, List, Main, Section } from "./styles";

export default function ListContainer({ favProducts }) {
  const location = useLocation();

  const [state, setState] = useState({ soy: "Review" });
  useEffect(() => {
    const interes = location.pathname.split("/")[2];
    if (interes === "compras") {
      setState({ soy: "Review" });
    } else {
      setState({ soy: "Favoritos" });
    }
  }, []);
  return (
    <Section>
      <List>
        <Li>
          <Header>{state.soy}</Header>
          <Main>{state.soy === "Review" ? <Review /> : <>Lol</>}</Main>
        </Li>
      </List>
    </Section>
  );
}
