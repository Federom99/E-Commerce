import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { RiAdminFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/autenticacion";
import { clearLocalStorage } from "../../redux/actions/cart";
import { removeFavs } from "../../redux/actions/favoritos";
import DropDown from "../DropDown";
import Loading from "../Loader";
import Logo from "./logo";
import style from "./nav.module.css";
import Search from "./search";
import { Contenido, IconStyled, NavStyle } from "./style";
import { subMenu } from "./submenu";

export default function NavBar({ products, theme }) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  let data = products.map((a) => ({ nombre: a.nombre, im: a.imagen }));
  const [dropdown, setDropdown] = useState(false);
  console.log(theme);
  const handleChange = (newValue) => {
    setDropdown(newValue);
  };

  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.isAdmin);
    }
  }, [currentUser]);

  function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) {
      return match[2];
    } else {
      return null;
    }
  }
  const result = check_cookie_name("jwt");

  useEffect(() => {
    if (!result) {
      dispatch(logout());
    }
  }, [result]);

  const logOut = () => {
    dispatch(logout());
    dispatch(clearLocalStorage());
    dispatch(removeFavs());
    window.location.reload();
    navigation("/");
  };
  const toProfile = () => {
    navigation("/profile");
  };

  let content;
  let contentExit;
  if (error) {
    content = <div>{error}</div>;
  }
  if (loading) {
    content = (
      <div>
        <Loading />
      </div>
    );
  }
  if (currentUser) {
    content = (
      <>
        <li onClick={toProfile} className={style.icons}>
          {currentUser.name}
        </li>
        {showAdminBoard && (
          <li className={style.icons}>
            <NavStyle to="/admin/dashboard/">
              <RiAdminFill />
            </NavStyle>
          </li>
        )}
      </>
    );
    contentExit = (
      <IconStyled onClick={logOut} className={style.icons}>
        <ImExit />
      </IconStyled>
    );
  }
  if (!currentUser) {
    content = (
      <li>
        <BsFillPersonFill onClick={() => setDropdown(!dropdown)} />
        <DropDown
          subMenu={subMenu}
          dropdown={dropdown}
          onChange={handleChange}
          theme={theme}
        />
      </li>
    );
  }

  return (
    <div className={style.full}>
      <Contenido
        className={!currentUser ? style.container : style.containerLoggedIn}
      >
        <li>
          <NavLink to="/" className={style.logoActive}>
            <Logo estilo={theme === "light" ? style.logo : style.logoDark} />
          </NavLink>
        </li>
        <li className={style.searching}>
          <Search data={data} />
        </li>
        {content}
        <IconStyled className={style.icons}>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </IconStyled>
        {contentExit}
      </Contenido>
    </div>
  );
}
