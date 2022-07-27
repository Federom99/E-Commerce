import ListContainer from "../../containers/ListContainer";

export default function Compras() {
  document.title = "Pro Ropa - Compras";
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  return (
    <div>
      <ListContainer />
    </div>
  );
}
