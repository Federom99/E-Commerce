import { 
  Container, 
  ImageContainer, 
  Image,
  UserInfo,
  UL,
  LI,
  Button,
  ExtraInfo,
  P
} from "./styles";

export default function User() {
  return (
    <Container>
      <ImageContainer>
        <Image src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="" />
      </ImageContainer>
      <UserInfo>
        <h3>Perfil</h3>
        <UL>
          <LI className="Info">Nombre de usuario</LI>
          <LI>Pepito perez</LI>
        </UL>
        <UL>
          <LI className="Info">Correo electronico</LI>
          <LI>Pepito@elmasperez.com</LI>
        </UL>
        <Button>Editar perfil</Button>
        <ExtraInfo>
          <P>Compras</P>
          <P>Favoritos</P>
        </ExtraInfo>
      </UserInfo>
    </Container>
  );
}


