import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { Img, LiImg } from "../Review/style";

function ListaProReview({ products, product }) {
  const [items, setItems] = useState(products);
  console.log(items);
  return (
    <LiImg as={Reorder.Group} axis="x" values={items} onReorder={setItems}>
      {items.map((item) => (
        <LiImg as={Reorder.Item} key={item.compra.productoId} value={item}>
          <Img src={item.imagen} />
        </LiImg>
      ))}
    </LiImg>
  );
}

export default ListaProReview;
