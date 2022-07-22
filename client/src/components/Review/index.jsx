import React from "react";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPedidos } from "../../redux/actions/pedidos";
import Loading from "../Loader";
import { motion } from "framer-motion";
import { dateFormat } from "./dateformat";
import { CloseBtn, Div, H3, Img, Li, LiImg, List } from "./style";
function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const loading = useSelector((state) => state.pedidos.loading);
  useEffect(() => {
    dispatch(getPedidos(id));
  }, []);

  return (
    <Div>
      <CloseBtn>
        <AiOutlineHeart />
      </CloseBtn>
      {loading ? (
        <>
          <Loading alto={0} />
        </>
      ) : (
        <>
          {/* {JSON.stringify(pedidos)} */}

          <List>
            {pedidos.map((pedido) => (
              <>
                <Li key={`${pedido.id}fecha`}>
                  <H3>{dateFormat(pedido.fecha, "MM-yy-dd")}</H3>
                </Li>
                <LiImg as={motion.li}>
                  {pedido.productos.map((product) => (
                    <Img
                      src={product.imagen}
                      alt={`Imagen de ${product.nombre}`}
                    />
                  ))}
                </LiImg>
                <Li>
                  <h4>
                    $ {Intl.NumberFormat("es-AR").format(pedido.pago_total)}
                  </h4>
                </Li>
              </>
            ))}
          </List>
        </>
      )}
    </Div>
  );
}

export default Review;
