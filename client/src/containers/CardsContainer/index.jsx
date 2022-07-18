import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Card from "../../components/Card";
// import { getProducts } from "../../redux/actions/product";
import { BTN, Section } from "./styles";
import 'react-toastify/dist/ReactToastify.css'

export default function CardContainer({ products }) {
  const dispatch = useDispatch();
  let btn;
  // if (products.length === 1) {
  //   btn = <BTN onClick={() => dispatch(getProducts())}>Regresar</BTN>;
  // }

  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
        ))}
      {btn}
        <ToastContainer position= "top-center"
          autoClose= {5000}
          hideProgressBar= {false}
          closeOnClick
          pauseOnHover
          draggable
          progress= {undefined}
          />
    </Section>
  );
}
