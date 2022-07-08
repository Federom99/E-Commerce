import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../../components/Card";
import { Section } from "./styles";
import { getProducts } from '../../redux/actions';

export default function CardContainer() {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </Section>
  );
}
