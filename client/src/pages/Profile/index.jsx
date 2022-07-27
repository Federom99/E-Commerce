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
  ButtonsContainer,
  LinkTo,
  Errors,
  Error,
} from "./styles";
import ModalContainer from "../../components/ModalReview/ModalContainer";
import Modal from "../../components/ModalReview";
import { getAllFavs } from "../../redux/actions/favoritos";

document.title = "Pro Ropa - Perfil";
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });


export default function User({theme}) {
  const { 
    disabled, 
    inputValues, 
    setInputValues, 
    inputErrors, 
    editField, 
    handleSubmit 
  } = useFormEditProfile();

  const {
    user: { id },
  } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.userReducer);

  const [editProfile, setEditProfile] = useState(false);

  function changeInfo(e) {
    try {
      handleSubmit(e);
      setEditProfile((prevState) => !prevState);
    } catch (error) {
      console.log("Ups");
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getAllFavs(id));
  }, []);

  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
          alt=""
          tema={theme}
        />
      </ImageContainer>
      {editProfile ? (
        <>
          <FormEdit>
            <Label>
              <p>Nombre</p>
              <Input
                name="nombre"
                value={inputValues.nombre}
                placeholder="Nombre"
                onChange={(e) => editField(e.target.name, e.target.value)}
              />
            </Label>
            <Label>
              <p>Apellido</p>
              <Input
                name="apellido"
                value={inputValues.apellido}
                placeholder="Apellido"
                onChange={(e) => editField(e.target.name, e.target.value)}
              />
            </Label>
            <Label>
              <p>Correo electronico</p>
              <Input
                name="mail"
                value={inputValues.mail}
                placeholder="ejemplo@gmail.com"
                onChange={(e) => editField(e.target.name, e.target.value)}
              />
            </Label>
            <Label>
              <p>Telefono</p>
              <Input
                name="telefono"
                value={inputValues.telefono}
                placeholder="Número de teléfono"
                onChange={(e) => editField(e.target.name, e.target.value)}
              />
            </Label>
            <ButtonsContainer>
              <Button
                type="button"
                onClick={() => setEditProfile((prevState) => !prevState)}
              >
                Cancelar
              </Button>
              <Button
                disabled={disabled}
                aceptar
                onClick={(e) => {
                  changeInfo(e);
                }}
              >
                Aceptar
              </Button>
            </ButtonsContainer>
          </FormEdit>
          <Errors>
            <Error>{inputErrors.nombre}</Error>
            <Error>{inputErrors.apellido}</Error>
            <Error>{inputErrors.mail}</Error>
          </Errors>
        </>
      ) : (
        <>
          <UserInfo>
            <h3>Perfil</h3>
            <UL>
              <LI className="Info">Nombre de usuario</LI>
              <LI>
                {user?.nombre} {user?.apellido}
              </LI>
            </UL>
            <UL>
              <LI className="Info">Correo electronico</LI>
              <LI>{user?.email}</LI>
            </UL>
            <UL>
              <LI className="Info">Telefono</LI>
              <LI>{user?.telefono}</LI>
            </UL>
            <Button
              onClick={() => {
                setEditProfile((prevState) => !prevState);
                setInputValues({
                  nombre: user?.nombre,
                  apellido: user?.apellido,
                  mail: user?.email || user?.mail,
                  telefono: user?.telefono,
                });
              }}
            >
              Editar perfil
            </Button>
            <ExtraInfo>
              <LinkTo to={`/profile/compras/${id}`}>
                <Button>Compras</Button>
              </LinkTo>
              <LinkTo to={`/profile/favoritos/${id}`}>
                <Button>Favoritos</Button>
              </LinkTo>
            </ExtraInfo>
          </UserInfo>
        </>
      )}
    </Container>
  );
}
