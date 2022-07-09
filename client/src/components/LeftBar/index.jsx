import { FaTshirt, FaLayerGroup} from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { GiArmoredPants, GiPirateCoat, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { orderByCategoryName, orderBy } from "../../redux/actions/product";
import { 
  CategoriesContainer, 
  Category, 
  Name, 
  ProductFilterContainer,
  Select,
  Option
} from "./styles";

function LeftBar() {
  const [category, setCategory] = useState("");
  const [orderByValue, setOrderByValue] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(orderByCategoryName(category));
  }, [category]);

  useEffect(() => {
    if(orderByValue) dispatch(orderBy(orderByValue))
  }, [orderByValue])

  function handleCategory(category) {
    setCategory(category);
  }

  return (

    <ProductFilterContainer>
      <CategoriesContainer>
        <Category onClick={() => handleCategory("Todos")}>
          <FaLayerGroup />
          <Name>Todos</Name>
        </Category>
        <Category onClick={() => handleCategory("Remeras")}>
          <FaTshirt size="18px"/>
          <Name>Remeras</Name>
        </Category>
        <Category onClick={() => handleCategory("Camisas")}>
          <RiShirtFill size="18px"/>
          <Name>Camisas</Name>
        </Category>
        <Category onClick={() => handleCategory("Pantalones")}>
          <GiArmoredPants size="18px"/>
          <Name>Pantalones</Name>
        </Category>
        <Category onClick={() => handleCategory("Calzado")}>
          <GiRunningShoe size="18px"/>
          <Name>Calzado</Name>
        </Category>
        <Category onClick={() => handleCategory("Abrigo")}>
          <GiPirateCoat size="18px"/>
          <Name>Abrigo</Name>
        </Category>
        <Category onClick={() => handleCategory("Accesorios")}>
          <BsSmartwatch size="18px"/>
          <Name>Accesorios</Name>
        </Category>
      </CategoriesContainer>
      <Select onChange={(e) => setOrderByValue(e.target.value)}>
        <Option disabled>Ordernar</Option>
        <Option value='MayorMenor'>Mayor precio</Option>
        <Option value='MenorMayor'>Menor Precio</Option>
        <Option value='A-Z'>Nombre (A-Z)</Option>
        <Option value='Z-A'>Nombre (Z-A)</Option>
      </Select>
    </ProductFilterContainer>
  );
}

export default LeftBar;
