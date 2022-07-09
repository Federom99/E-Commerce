import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import Search from "./search";
import { Contenido } from "./style";
import logo from "../../../assets/Logo.svg";

export default function NavBar({ products }) {
  let data = products.map((a) => ({ nombre: a.nombre, im: a.imagen }));
  return (
    <div className={style.full}>
      <Contenido className={style.container}>
        <li>
          <NavLink to="/">
            <img src={logo} className={style.logo} alt="logo" />
          </NavLink>
        </li>
        <li className={style.searching}>
          <Search data={data} />
        </li>
        {/* <li>
          <NavLink to="/profile">
            <BsFillPersonFill />
          </NavLink>
        </li>
        <li className={style.icons}>
          <NavLink to="/newUser"></NavLink>
        </li> */}
        <li className={style.icons}>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
      </Contenido>
    </div>
  );
}
