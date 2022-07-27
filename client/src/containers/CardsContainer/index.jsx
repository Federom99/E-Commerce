import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Card from "../../components/Card";
// import { getProducts } from "../../redux/actions/product";
import { BTN, Section } from "./styles";
import "react-toastify/dist/ReactToastify.css";

export default function CardContainer({ products , theme }) {
  let btn;
  // if (products.length === 1) {
  //   btn = <BTN onClick={() => dispatch(getProducts())}>Regresar</BTN>;
  // }
  document.title = "Pro Ropa"

  return (
    <Section>
      {products?.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      {btn}
      {
        theme==='light' ? (<ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
        />) : (<ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme={'dark'}
        />)
      }
      
    </Section>
  );
}
