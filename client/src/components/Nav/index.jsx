import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import Search from "./search";
import { Contenido } from "./style";
import logo from "../../../assets/Logo.svg";
import { RiAddBoxFill } from "react-icons/ri";
import { subMenu } from "./submenu";
import DropDown from "../DropDown";
import { useState } from "react";

export default function NavBar({ products }) {
  let data = products.map((a) => ({ nombre: a.nombre, im: a.imagen }));
  const [dropdown, setDropdown] = useState(false);

  const handleChange = (newValue) => {
    setDropdown(newValue);
  };

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
        <li>
          <BsFillPersonFill onClick={() => setDropdown(!dropdown)} />
          <DropDown
            subMenu={subMenu}
            dropdown={dropdown}
            onChange={handleChange}
          />
        </li>
        <li className={style.icons}>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
        <li className={style.icons}>
          <NavLink to="/createProduct">
            <RiAddBoxFill />
          </NavLink>
        </li>
      </Contenido>
    </div>
  );
}
