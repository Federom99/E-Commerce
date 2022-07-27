import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { DropDownStyle, SubMenustyle } from "./style";

function DropDown({ subMenu, dropdown, onChange, theme }) {
  return (
    <DropDownStyle dropdown={dropdown}>
      {subMenu.map((item, index) => (
        <SubMenustyle key={index}>
          <NavLink to={item.link} onClick={() => onChange(false)}>
            {item.title}
          </NavLink>
        </SubMenustyle>
      ))}
    </DropDownStyle>
  );
}

export default DropDown;
