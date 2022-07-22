import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPedidos } from "../../redux/actions/pedidos";
import Loading from "../Loader";
import { motion } from "framer-motion";
import { dateFormat } from "./dateformat";
import {
  CloseBtn,
  Div,
  DivImg,
  H3,
  Img,
  Li,
  LiImg,
  LIinimg,
  List,
  Ul,
} from "./style";
import Modal from "../ModalReview";
import ModalContainer from "../ModalReview/ModalContainer";

function Review() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const pedidos = useSelector((state) => state.pedidos.pedidos);
  const loading = useSelector((state) => state.pedidos.loading);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  console.log(modalOpen);

  useEffect(() => {
    dispatch(getPedidos(id));
  }, []);

  return (
    <>
      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} text={"lol"} handleClose={close} />
        )}
      </ModalContainer>
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
              {pedidos.map((pedido) => {
                return (
                  <>
                    <Li key={`${pedido.id}fecha`}>
                      <H3>{dateFormat(pedido.fecha, "MM-yy-dd")}</H3>
                    </Li>

                    {/* <ListaProReview products={pedido.productos} /> */}

                    <LiImg>
                      {pedido.productos.map((product) => {
                        return (
                          <LIinimg
                            as={motion.li}
                            whileHover={{
                              scale: 1.02,
                            }}
                            key={product.compra.productoId}
                            onClick={() => (modalOpen ? close() : open())}
                          >
                            <Img
                              as={motion.img}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.9 }}
                              src={product.imagen}
                            />
                            <Ul>
                              <li>Reseña</li>
                            </Ul>
                          </LIinimg>
                        );
                      })}
                    </LiImg>
                    <Li>
                      <h4>
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
