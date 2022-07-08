import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { Section } from "./styles";

export default function CardContainer({ products }) {
  console.log(products);
  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </Section>
  );
}
