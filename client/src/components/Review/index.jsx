import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { getPedidos } from "../../redux/actions/pedidos";
import { changeModalClose, changeModalOPen } from "../../redux/actions/reviews";
import Loading from "../Loader";
import { dateFormat } from "./dateformat";
import {
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

function Review({ theme }) {
  // console.log(theme);
  const dispatch = useDispatch();
  const { id } = useParams();

  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const loading = useSelector((state) => state.pedidos.loading);
  const change = useSelector((state) => state.reviews.modal);

  const close = () => dispatch(changeModalClose());
  const open = (id, imagen, nombre, userId, estado) => {
    if (estado === "Entregado") {
      dispatch(changeModalOPen(id, imagen, nombre, userId, estado));
    } else toast.error("Solo Puede Reseñar si el pedido fue Entregado");
  };
  useEffect(() => {
    dispatch(getPedidos(id));
  }, []);
  // rojo a verde segun estado

  return (
    <Div key={0}>
      {theme === "light" ? (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
        />
      ) : (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme={"dark"}
        />
      )}
        <div>
          {pedidos.map((pedido) => {
            const colors = [
              "#ff0088",
              "#00ffd5",
              "#ff0000",
              "#ff2a00",
              "#ff8800",
              "#ffff00",
              "#6aff00",
              "#00ff6a",
            ];
            let color;
            if (pedido.estado === "Pendiente de pago") color = colors[0];
            if (pedido.estado === "Aprobado") color = colors[1];
            else if (pedido.estado === "Rechazado") color = colors[2];
            else if (pedido.estado === "En Preparacion") color = colors[3];
            else if (pedido.estado === "En camino") color = colors[4];
            else if (pedido.estado === "En punto de entrega") color = colors[5];
            else if (pedido.estado === "En poder del correo") color = colors[6];
            else if (pedido.estado === "Entregado") color = colors[7];
            if(pedido.estado === "Pendiente de pago") return;
            return (
              <List key={pedido.id}>
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
                        {pedido.estado === "Entregado" && (
                          <Ul>
                            <p style={{fontWeight:"bolder", fontSize:"1rem"}}>Reseñar</p>
                          </Ul>
                        )}
                      </LIinimg>
                    );
                  })}
                </LiImg>
                <Li>
                  <h4 key={`${pedido.id}id`}>
                    # {pedido.id}
                  </h4>
                </Li>
                <Li>
                  <h4 key={`${pedido.id}money`}>
                    $ {Intl.NumberFormat("es-AR").format(pedido.pago_total)}
                  </h4>
                </Li>
                <Li><Estado color={color}>{pedido.estado}</Estado></Li>
                <Li key={`${pedido.id}fecha`}>
                  <H3>{dateFormat(pedido.fecha, "dd-MM-yy")}</H3>
                </Li>
                {/* <Linea /> */}
              </List>
            );
          })}
        </div>
    </Div>
  );
}

export default Review;
