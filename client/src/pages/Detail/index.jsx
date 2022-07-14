import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Main,
  Div,
  ImageContainer,
  Image,
  InfoContainer,
  H2,
  P,
  Stars,
  SizeInfo,
  Description,
  Size,
  Button,
  Review,
} from "./styles";
import { getProduct , deleteProduct } from "../../redux/actions/product";
import {addToCart} from "../../redux/actions/cart"
import Loading from "../../components/Loader";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ProductDetail = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [size , setSize] = useState('');
  const [stock , setStock] = useState(0);
  const [isLoading , setIsLoading] = useState(true);
  
  const stars = Array(5).fill(0);


  const handleClick = (value) => {
    setCurrentValue(value);
  };
  
  const defineSize = (event)=>{
    setSize(event.target.innerHTML)
  }

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  let dispatch = useDispatch();

  let product = useSelector((state) => state.product.product);
  let loading = useSelector((state) => state.product.loading);
  let error = useSelector((state) => state.product.error);
  let { productId } = useParams();

  
  useEffect(()=>{
    if (!Object.keys(product).length){
      dispatch(getProduct(productId))
    }
    else {
      setTimeout(()=>{
        setIsLoading(false)
      },1000)
    }
  },[product])
  useEffect(()=>{
    return ()=>{
      dispatch(deleteProduct())
    }
  },[])

  const checkStock = async (cantidad = 1) =>{
    let talle = size
    const product = await axios.get(`http://localhost:3001/product/${productId}`);
    if (talle==='Sin talle'){
      if (product.data.talles[0].producto_talle.stock >= cantidad ) return true
      else return false
    }
    else{
      const index = await product.data.talles.findIndex(p=> p.talle === talle) 
      if (product.data.talles[index].producto_talle.stock >= cantidad ) return true
      else return false
    }
  }

  useEffect(()=>{
    if (Object.keys(product).length){
      if (product.categorium.nombre === 'Accesorios'){
        setSize("Sin talle")
        setStock(product.talles[0].producto_talle.stock)
      } 
    }
  },[product])

  useEffect(()=>{
    if (Object.keys(product).length && product.categorium.nombre !== 'Accesorios' && size){
      let index = product.talles.findIndex(p=>p.talle === size)
      setStock(product.talles[index].producto_talle.stock)
    }    
  },[size])

  const addCart = async ()=>{
    if(product.categorium?.nombre ==="Accesorios"){
      setSize("Sin talle");
    };
    let order = {
      ...product,
      talle:size,
      cantidad:1
    };
    if (order.talle){
      const check = await checkStock()
      if (check){
        dispatch(addToCart(order));
        alert("Agregado al carrito");
      } else{
        alert(`No hay stock `)
      }
    }
    else alert("Seleccione un talle");
  }

  if (error) return <div>Error! {error.message}</div>;
  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  const formatPrice = new Intl.NumberFormat("es-AR").format(product.precio);
  console.log(product);
  return (
    <Main>
      <Div>
        <ImageContainer>
          <Image src={product?.imagen} />
        </ImageContainer>
        <InfoContainer>
          <H2>{product?.nombre}</H2>
          {
            size ? ( <P stock={stock}>Precio: $ {formatPrice}</P> ) : null
          }
          
          {/* <Stars>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={20}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </Stars> */}
          <SizeInfo>
            {product.categorium?.nombre !== "Accesorios" &&
              product.talles?.map((talle) => {
                return <Size onClick={defineSize} key={talle.id}>{talle.talle}</Size>;
              })}
          </SizeInfo>
          <Description>{product.descripcion}</Description>
          <Button onClick={addCart}>Añadir al carrito</Button>
          {/* <Review placeholder="Enter a review of the product"></Review> */}
          <Button>Send review</Button>
        </InfoContainer>
      </Div>
    </Main>
  );
};

export default ProductDetail;
