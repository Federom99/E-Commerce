import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FavIcon from "../../components/FavContainer";
import Loading from "../../components/Loader";
import {
  addToCart,
  modifyItemStock,
  setItemStock,
  setLocalStorage,
} from "../../redux/actions/cart";
import { clearProduct, getProduct } from "../../redux/actions/product";
import { getProductReviews } from "../../redux/actions/reviews";
import estilos from "./detail.module.css";
import {
  Button,
  Description,
  Detbox,
  Div,
  DivRese,
  EachDiv,
  FavContainer,
  H2,
  Image,
  ImageContainer,
  InfoContainer,
  Main,
  P,
  ResenasContainer,
  Review,
  Price,
  Size,
  SizeInfo,
  Stars,
  UserDetails,
  FavIncluye,
} from "./styles";

const stars = Array(5).fill(0);
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ProductDetail = ({theme}) => {
  const [size, setSize] = useState("");
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingReview, setLoadingReview] = useState(true);
  const [text, setText] = useState(null);
  const [resenas, setResenas] = useState([]);

  const defineSize = (event) => {
    setSize(event.target.innerHTML);
  };

  let dispatch = useDispatch();
  let [cart, product, error, currentStock] = useSelector((state) => [
    state.cart,
    state.product.product,
    state.product.error,
    state.cart.cartRemainingStock,
  ]);
  const { user: currentUser } = useSelector((state) => state.auth);
  let { productId } = useParams();

  document.title = "Pro Ropa - "+product.nombre;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    if (!Object.keys(product).length) {
      dispatch(getProduct(productId));
      dispatch(getProductReviews(productId)).then((res) => {
        if (res.payload.length === 0) {
          setLoadingReview(false);
          setText("No hay reseñas de este producto");
        } else {
          setLoadingReview(false);
          setText("Reseñas");
          setResenas(res.payload);
        }
      });
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [product]);
  useEffect(() => {
    return () => {
      dispatch(setLocalStorage(cart));
      dispatch(clearProduct());
    };
  }, []);

  const checkStock = async (cantidad = 1) => {
    let talle = size;
    const product = await axios.get(
      `http://localhost:3001/product/${productId}`
    );
    if (talle === "Sin talle") {
      if (product.data.talles[0].producto_talle.stock >= cantidad) return true;
      else return false;
    } else {
      const index = await product.data.talles.findIndex(
        (p) => p.talle === talle
      );
      if (product.data.talles[index].producto_talle.stock >= cantidad)
        return true;
      else return false;
    }
  };

  useEffect(() => {
    if (Object.keys(product).length) {
      if (product.categorium.nombre === "Accesorios") {
        setSize("Sin talle");
        setStock(product.talles[0].producto_talle.stock);
      }
    }
  }, [product]);

  useEffect(() => {
    if (
      Object.keys(product).length &&
      product.categorium.nombre !== "Accesorios" &&
      size
    ) {
      let index = currentStock.findIndex((p) => {
        if (p.id === parseInt(productId) && p.talle === size) return p;
      });
      if (index !== -1) {
        setStock(currentStock[index].stock);
      } else {
        let index2 = product.talles.findIndex((p) => p.talle === size);
        setStock(product.talles[index2].producto_talle.stock);
      }
    }
  }, [size, currentStock]);

  const addCart = async () => {
    if (product.categorium?.nombre === "Accesorios") {
      setSize("Sin talle");
    }
    let order = {
      ...product,
      talle: size,
      cantidad: 1,
    };

    if (order.talle) {
      const check = await checkStock();
      if (check) {
        let index = currentStock.findIndex((p) => {
          if (p.id === parseInt(productId) && p.talle === size) return p;
        });
        if (index !== -1) {
          //si lo encuentra en el global actual de stock
          if (currentStock[index].stock - 1 >= 0) {
            //si el stock no queda como negativo
            dispatch(modifyItemStock(parseInt(productId), size));
            dispatch(addToCart(order));
            toast.success("Agregado al carrito");
            setStock((stock) => (stock -= 1));
          } else {
            toast.error("No hay más stock");
          }
        } else {
          //si no lo encuentra en el global (si hay stock porque lo verifica check)
          dispatch(addToCart(order));
          dispatch(setItemStock(parseInt(productId), size));
          toast.success("Agregado al carrito");
          setStock((stock) => (stock -= 1));
        }
      } else {
        toast.error(`No hay stock `);
      }
    } else toast.error("Seleccione un talle");
  };

  if (error) return <div>Error! {error.message}</div>;
  if (isLoading)
    return (
      <div>
        <Loading alto={"1000px"} />
      </div>
    );

  const formatPrice = new Intl.NumberFormat("es-AR").format(product.precio);

  return (
    <Main>
      {
        theme === 'light' ? (<ToastContainer
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
      <Div>
        <ImageContainer>
          <FavContainer>
            <FavIncluye>
              {currentUser ? (
                <FavIcon
                  productId={parseInt(productId)}
                  productName={product.nombre}
                />
              ) : null}
            </FavIncluye>
          </FavContainer>
          <Image src={product?.imagen} />
        </ImageContainer>
        <InfoContainer>
          <H2>{product?.nombre}</H2>
          <Price>Precio: $ {formatPrice}</Price>
          {size ? <P stock={stock}></P> : null}

          <SizeInfo>
            {product.categorium?.nombre !== "Accesorios" &&
              product.talles?.map((talle) => {
                return (
                  <Size
                    onClick={defineSize}
                    key={talle.id}
                    className={size === talle.talle ? estilos.sizeSelected : ""}
                  >
                    {talle.talle}
                  </Size>
                );
              })}
          </SizeInfo>
          <Description>{product.descripcion}</Description>
          <Button onClick={addCart}>Agregar al carrito</Button>
        </InfoContainer>
      </Div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h2>{resenas.length ? text : null}</h2>
        <ResenasContainer>
          {loadingReview ? (
            <Loading />
          ) : (
            <>
              {resenas.length > 0 &&
                resenas.map((r) => (
                  <>
                    <EachDiv class="div1 eachdiv">
                      <UserDetails class="userdetails" tema={theme}>
                        <div>
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                            alt=""
                          />
                        </div>
                        <Detbox>
                          <p className="name">{r.usuario.nombre}</p>
                          <p class="designation">{r.usuario.mail}</p>
                        </Detbox>
                      </UserDetails>
                      <Review>
                        <div style={{ marginTop: "1rem" }}>
                          <h4>{r.titulo}</h4>
                          <Stars>
                            {stars.map((_, index) => {
                              return (
                                <FaStar
                                  key={index}
                                  size={15}
                                  color={
                                    r.puntaje > index
                                      ? colors.orange
                                      : colors.grey
                                  }
                                  style={{
                                    marginRight: 5,
                                  }}
                                />
                              );
                            })}
                          </Stars>
                        </div>

                        <p>{r.comentario}</p>
                      </Review>
                    </EachDiv>
                  </>
                ))}
            </>
          )}
        </ResenasContainer>
      </div>
    </Main>
  );
};

export default ProductDetail;
