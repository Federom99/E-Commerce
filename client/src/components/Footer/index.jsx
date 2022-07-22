import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black;
  width: 100%;
  height: 220px;
  @media screen and (max-width: 560px) {
    heigth: 130px;
    justify-content: space-evenly;
  }
`;

const Contacto = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1800px;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Categoria = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.a`
  text-decoration: none;
  color: black;
  font-size: 17px;
  font-weight: bold;
  margin: 20px 0px;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    font-size: 14px;
    font-weight: 300;
  }
  @media screen and (max-width: 400px) {
    font-size: 10px;
    font-weight: 300;
  }
`;

const Bar = styled.div`
  background-color: black;
  width: 35%;
  height: 3px;
  margin: 10px 25px;
  border-radius: 2px 2px 2px 2px;
`;

export default function Footer({ contacto }) {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Bar />
        <Title>Contáctanos</Title>
        <Bar />
      </div>

      <Contacto>
        <Categoria>
          <SubTitle href="https://portfolio-rf.netlify.app/" target="_blank">
            Federico R.
          </SubTitle>
          <SubTitle
            href="https://www.linkedin.com/in/alan-acevedo-6067031bb/"
            target="_blank"
          >
            Alan A.
          </SubTitle>
        </Categoria>

        <Categoria>
          <SubTitle
            href="https://www.linkedin.com/in/david-a-gomez-rojas-a08367b1/"
            target="_blank"
          >
            David G.
          </SubTitle>
          <SubTitle
            href="https://www.linkedin.com/in/martin-orlando-840785186/"
            target="_blank"
          >
            Martin O.
          </SubTitle>
        </Categoria>

        <Categoria>
          <SubTitle
            href="https://www.linkedin.com/in/jose-alfredo-osorio-garcia/"
            target="_blank"
          >
            Jose O.
          </SubTitle>
          <SubTitle
            href="https://www.linkedin.com/in/emiliano-arancio-083528231/"
            target="_blank"
          >
            Emiliano A.
          </SubTitle>
        </Categoria>

        <Categoria>
          <SubTitle
            href="https://www.linkedin.com/in/alexis-cortazzi-247585213/"
            target="_blank"
          >
            Alexis C.
          </SubTitle>
          <SubTitle
            href="https://www.linkedin.com/in/alexis-cortazzi-247585213/"
            target="_blank"
          >
            Mario R.
          </SubTitle>
        </Categoria>
      </Contacto>
    </Container>
  );
}
