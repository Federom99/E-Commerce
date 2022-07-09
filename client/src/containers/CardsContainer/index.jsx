import Card from "../../components/Card";
import { getProducts } from "../../redux/actions/product";
import { BTN, Section } from "./styles";
import { useDispatch } from "react-redux";

export default function CardContainer({ products }) {

  const dispatch = useDispatch();
  let btn;
  if (products.length === 1) {
    btn = <BTN onClick={() => dispatch(getProducts())}>Regresar</BTN>;
  }

  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      {btn}
    </Section>
  );
}
