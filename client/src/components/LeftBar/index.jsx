import { FaTshirt, FaLayerGroup} from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { GiArmoredPants, GiPirateCoat, GiRunningShoe } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {BsArrowDownUp} from "react-icons/bs";

import { orderByCategoryName, orderBy, getProducts } from "../../redux/actions/product";
import { 
  CategoriesContainer, 
  Category, 
  Name, 
  ProductFilterContainer,
  Select,
  Option,
  FilterTitle,
  DivFilterTitle
} from "./styles";

function LeftBar({resetPagina}) {
  const [category, setCategory] = useState("");
  const [orderByValue, setOrderByValue] = useState("");
  const [input, setInput] = useState({orden: "A-Z"});

  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(orderByCategoryName(category));
    resetPagina(1);
    setInput({orden: "A-Z"});
  }, [category]);

  useEffect(() => {
    if(orderByValue) dispatch(orderBy(orderByValue))
    resetPagina(1)
  }, [orderByValue])

  function handleCategory(category) {
    setCategory(category);
    resetPagina(1);
    setInput({orden: "A-Z"});
  }

  function changeOrderBy(e){
    setOrderByValue(e.target.value);
    setInput(e.target.value);
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
      <DivFilterTitle>
        <FilterTitle>Ordenar</FilterTitle>
        <BsArrowDownUp />
      </DivFilterTitle>
      <Select onChange={(e) => changeOrderBy(e)} value={input.orden}>
        <Option>Precio Asc</Option>
        <Option>Precio Desc</Option>
        <Option>A-Z</Option>
        <Option>Z-A</Option>
      </Select>
    </ProductFilterContainer>
  );
}

export default LeftBar;
