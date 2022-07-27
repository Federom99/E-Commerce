import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavProducts } from "../../../redux/actions/favoritos";
import Loading from "../../Loader";
import FavIcon from "../../FavContainer";
import {
  CardLi,
  CardList,
  FavContainer,
  Img,
  ImgContainer,
  LinkTo,
  Price,
  Text,
} from "./styles";

export default function FavCard({ productId }) {
  const [isLoading, setIsLoading] = useState(true);
  const favProducts = useSelector((state) => state.favorites.favDetail);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavProducts(productId));
    const product = favProducts.filter((p) => p.id === productId);
    setData(product[0]);
    // console.log(product)
  }, []);

  useEffect(() => {
    if (favProducts) {
      const product = favProducts.filter((p) => p.id === productId);
      setData(product[0]);
    }
    if (data && Object.keys(data).length) {
      setIsLoading(false);
    }
  }, [data, favProducts]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <CardList>
            <CardLi>
              <FavContainer>
                <FavIcon productId={productId} productName={data.nombre} />
              </FavContainer>
              <ImgContainer>
                <LinkTo to={`/detail/${productId}`}>
                  <Img src={data.imagen} />
                </LinkTo>
              </ImgContainer>
            </CardLi>
            <CardLi>
              <Text>
                <h3>{data.nombre}</h3>
                <p>{data.descripcion}</p>
              </Text>
            </CardLi>
            <CardLi>
              <Price>Precio: ${data.precio}</Price>
              {/* <p>${data.precio}</p> */}
            </CardLi>
          </CardList>
        </main>
      )}
    </div>
  );
}
