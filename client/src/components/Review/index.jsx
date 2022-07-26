import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPedidos } from "../../redux/actions/pedidos";
import { changeModalClose, changeModalOPen } from "../../redux/actions/reviews";
import Loading from "../Loader";
import { dateFormat } from "./dateformat";
import { CloseBtn, Div, H3, Img, Li, LiImg, LIinimg, List, Ul } from "./style";

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const loading = useSelector((state) => state.pedidos.loading);
  const change = useSelector((state) => state.reviews.modal);

  const close = () => dispatch(changeModalClose());
  const open = (id, imagen, nombre, userId) =>
    dispatch(changeModalOPen(id, imagen, nombre, userId));

  useEffect(() => {
    dispatch(getPedidos(id));
  }, []);

  return (
    <>
      <Div>
        {loading ? (
          <>
            <Loading alto={0} />
          </>
        ) : (
          <>
            <List>
              {pedidos.map((pedido) => {
                return (
                  <>
                    <Li key={`${pedido.id}fecha`}>
                      <H3>{dateFormat(pedido.fecha, "MM-yy-dd")}</H3>
                    </Li>
                    <LiImg key={`${pedido.id}img`}>
                      {pedido.productos.map((product) => {
                        return (
                          <LIinimg
                            as={motion.li}
                            whileHover={{
                              scale: 1.02,
                            }}
                            key={product.compra.productoId}
                            onClick={() =>
                              change
                                ? close()
                                : open(
                                    product.compra.productoId,
                                    product.imagen,
                                    product.nombre,
                                    id
                                  )
                            }
                          >
                            <Img
                              as={motion.img}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.9 }}
                              src={product.imagen}
                            />
                            <Ul>
                              <li>Reseñar</li>
                            </Ul>
                          </LIinimg>
                        );
                      })}
                    </LiImg>
                    <Li>
                      <h4 key={`${pedido.id}money`}>
                        $ {Intl.NumberFormat("es-AR").format(pedido.pago_total)}
                      </h4>
                    </Li>
                  </>
                );
              })}
            </List>
          </>
        )}
      </Div>
    </>
  );
}

export default Review;
