import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPedidos } from "../../redux/actions/pedidos";
import { changeModalClose, changeModalOPen } from "../../redux/actions/reviews";
import Loading from "../Loader";
import { dateFormat } from "./dateformat";
import {
  CloseBtn,
  Div,
  Estado,
  H3,
  Img,
  Li,
  LiImg,
  LIinimg,
  Linea,
  List,
  Ul,
} from "./style";

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const loading = useSelector((state) => state.pedidos.loading);
  const change = useSelector((state) => state.reviews.modal);

  const close = () => dispatch(changeModalClose());
  const open = (id, imagen, nombre, userId, estado) => {
    console.log(estado);
    if (estado === "entregado") {
      dispatch(changeModalOPen(id, imagen, nombre, userId, estado));
    }
  };
  useEffect(() => {
    dispatch(getPedidos(id));
  }, []);
  // rojo a verde segun estado

  return (
    <Div key={0}>
      {loading ? (
        <Loading alto={0} />
      ) : (
        <div>
          {pedidos.map((pedido) => {
            const colors = [
              "#ff0088",
              "#ff0000",
              "#ff8800",
              "#ffff00",
              "#6aff00",
              "#00ff22",
            ];
            let color;
            if (pedido.estado === "Aprobado") color = colors[0];
            if (pedido.estado === "en preparacion") color = colors[1];
            else if (pedido.estado === "en camino") color = colors[2];
            else if (pedido.estado === "en punto de entrega") color = colors[3];
            else if (pedido.estado === "en poder del correo") color = colors[4];
            else if (pedido.estado === "entregado") color = colors[5];
            return (
              <List key={pedido.id}>
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
                                id,
                                pedido.estado
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
                          <p>Reseñar</p>
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
                <Estado color={color}>{pedido.estado}</Estado>
                <Linea />
              </List>
            );
          })}
        </div>
      )}
    </Div>
  );
}

export default Review;
