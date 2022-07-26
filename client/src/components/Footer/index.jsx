import { nosotros } from "./profile";
import {
  Bar,
  Categoria,
  Contacto,
  Container,
  Img,
  SubTitle,
  Title,
} from "./style";

export default function Footer({ contacto }) {
  const formateadoNosotros = nosotros.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    if (currentIndex % 2 === 0)
      accumulator.push(array.slice(currentIndex, currentIndex + 2));
    return accumulator;
  },
  []);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <Bar />
        <Title>Contáctanos</Title>
        <Bar />
      </div>
      <Contacto>
        {formateadoNosotros &&
          formateadoNosotros.map((noso, i) => (
            <Categoria key={i}>
              {noso?.map((n, i) => (
                <SubTitle href={n.linkedIn} target="_blank" key={i}>
                  <Img src={n.imagen} alt={`imagen-${n.usuario}-i`} />
                  {n.usuario}
                </SubTitle>
              ))}
            </Categoria>
          ))}
      </Contacto>
    </Container>
  );
}
