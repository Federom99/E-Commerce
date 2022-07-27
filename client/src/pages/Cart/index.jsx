import ShoppingCart from "../../containers/CartContainer";

export default function Cart({theme}) {
  return (
    <div style={{ paddingTop: "2rem", minHeight: "70vh" }}>
      <ShoppingCart theme={theme} />
    </div>
  );
}
