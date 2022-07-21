import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUser } from "../../redux/actions/userProfile";

import useFormEditProfile from "../../hooks/useFormEditProfile";

import { 
  Container, 
  ImageContainer, 
  Image,
  UserInfo,
  UL,
  LI,
  Button,
  ExtraInfo,
  P,
  FormEdit,
  Label,
  Input,
  ButtonsContainer
} from "./styles";

export default function User() {

  const {
    disabled,
    inputValues,
    inputErrors, 
    editField, 
    handleSubmit,
  } = useFormEditProfile()

  const {user: {id}} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.userReducer)

  const [editProfile, setEditProfile] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser(id))
  }, [])

  return (
    <Container>
      <ImageContainer>
        <Image src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="" />
      </ImageContainer>
      {
        editProfile
        ?
        <>
          <FormEdit>
            <Label>
              <p>Nombre</p>
              <Input
                name="nombre"
                value={inputValues.nombre} 
                placeholder="Pepito"
                onChange={(e) => editField(e.target.name,e.target.value)}
              />
            </Label>
            <Label>
              <p>Apellido</p>
              <Input
                name="apellido"
                value={inputValues.apellido} 
                placeholder="Perez"
                onChange={(e) => editField(e.target.name,e.target.value)}
              />
            </Label>
            <Label>
              <p>Correo electronico</p>
              <Input
                name="mail"
                value={inputValues.mail} 
                placeholder="Perez"
                onChange={(e) => editField(e.target.name,e.target.value)}
              />
            </Label>
            <Label>
              <p>Telefono</p>
              <Input/>
            </Label>
            <ButtonsContainer>
              <Button 
                type="button" 
                onClick={() => setEditProfile(prevState => !prevState)}
              >
                Cancelar
              </Button>
              <Button
                disabled={disabled}
                aceptar 
                onClick={(e) => {
                  handleSubmit(e)
                  setEditProfile(prevState => !prevState)
                }}
              >
                Aceptar
              </Button>
            </ButtonsContainer>
          </FormEdit>
        </>
        :
        <>
          <UserInfo>
            <h3>Perfil</h3>
            <UL>
              <LI className="Info">Nombre de usuario</LI>
              <LI>{user?.nombre} {user?.apellido}</LI>
            </UL>
            <UL>
              <LI className="Info">Correo electronico</LI>
              <LI>{user?.email}</LI>
            </UL>
            <UL>
              <LI className="Info">Telefono</LI>
              <LI>{user?.telefono}</LI>
            </UL>
            <Button onClick={() => setEditProfile(prevState => !prevState)}>Editar perfil</Button>
            <ExtraInfo>
              <P>Compras</P>
              <P>Favoritos</P>
            </ExtraInfo>
          </UserInfo>
        </>
      }
    </Container>
  );
}


