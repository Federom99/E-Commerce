import Card from "../../components/Card";
import { Section } from "./styles";

export default function CardContainer({ products }) {
  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </Section>
  );
}
