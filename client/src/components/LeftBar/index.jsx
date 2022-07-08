import { FaTshirt } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { GiArmoredPants, GiPirateCoat, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { orderByCategoryName } from "../../redux/actions/product";
import { CategoriesContainer, Category, Name } from "./styles";

function LeftBar() {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (category !== "") dispatch(orderByCategoryName(category));
  }, [category]);

  function handleCategory(category) {
    setCategory(category);
  }

  return (
    <CategoriesContainer>
      <Category onClick={() => handleCategory("Remeras")}>
        <FaTshirt />
        <Name>Remeras</Name>
      </Category>
      <Category onClick={() => handleCategory("Camisas")}>
        <RiShirtFill />
        <Name>Camisas</Name>
      </Category>
      <Category onClick={() => handleCategory("Pantalones")}>
        <GiArmoredPants />
        <Name>Pantalones</Name>
      </Category>
      <Category onClick={() => handleCategory("Calzado")}>
        <GiRunningShoe />
        <Name>Calzado</Name>
      </Category>
      <Category onClick={() => handleCategory("Abrigo")}>
        <GiPirateCoat />
        <Name>Abrigo</Name>
      </Category>
      <Category onClick={() => handleCategory("Accesorios")}>
        <BsSmartwatch />
        <Name>Accesorios</Name>
      </Category>
    </CategoriesContainer>
  );
}

export default LeftBar;
