import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav";
import MainContainer from "./containers/MainContainer";
import AdminHub from "./pages/Admin";
import ShoppingCart from "./pages/Cart";
import CreateUser from "./pages/CreateUser";
import ProductDetail from "./pages/Detail";
import Profile from "./pages/Profile";

import Login from "./pages/Login";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "./components/CreateProduct";
import Footer from "./components/Footer";
import Loading from "./components/Loader";

import NoMatch from "./pages/NoMatch";
import { getProducts } from "./redux/actions/product";
import { ErrorContainer } from "./styles/appStyle";
import DashboardAdmin from "./components/DashboardAdmin";
import Users from "./pages/Admin/users";
import Products from "./pages/Admin/products";
import Sales from "./pages/Admin/sales";

import { GlobalStyle } from "./styles/GlobalStyles";


function App() {
  // const location = useLocation();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.product.error);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(getProducts()), 1000);
    }
  }, [error]);

  if (error) {
    return (
      <div>
        <GlobalStyle />
        <NavBar products={products} />
        <ErrorContainer>Error! {error.message}</ErrorContainer>
      </div>
    );
  }
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar products={products} />
      {/* {location.pathname !== "/" ? <NavBar /> : null} */}
      <Routes>
        <Route exact path="/" element={<MainContainer products={products} />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/admin/" element={<AdminHub />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/cart/" element={<ShoppingCart />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        {/* <Route path="/confirmacion/:id" element={<Confirmacion />} /> */}
        <Route path="/admin" element={<AdminHub />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/admin/dashboard/*" element={<DashboardAdmin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
