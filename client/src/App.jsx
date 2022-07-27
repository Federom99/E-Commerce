import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/Nav";
import MainContainer from "./containers/MainContainer";
import AdminHub from "./pages/Admin";
import ShoppingCart from "./pages/Cart";
import CreateUser from "./pages/CreateUser";
import ProductDetail from "./pages/Detail";
import Profile from "./pages/Profile";

import RequireAuthUser from "./components/RequireAuth";
import RequireAuthAdmin from "./components/RequireAuth/admin";

import Login from "./pages/Login";

import { useEffect, useState } from "react";
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
import Confirmacion from "./pages/Confirmacion";
import { GlobalStyle, lightTheme, darkTheme } from "./styles/GlobalStyles";
import { clearMsg } from "./redux/actions/autenticacion";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess/CheckoutSuccess";
import ForgotPassword from "./pages/ForgotPasword";
import ResetPassword from "./pages/ResetPassword";
import Compras from "./pages/Compras";
import Favoritos from "./pages/Favoritos";
import ModalContainer from "./components/ModalReview/ModalContainer";
import Modal from "./components/ModalReview";
import { changeModalClose, changeModalOPen } from "./redux/actions/reviews";
import { useDarkMode } from "./styles/useDarkMode";
import Toggle from "./components/Toggle/Toggle";
import styled, { ThemeProvider } from "styled-components";

function handleErrors(response, rest) {
  if (response.status === 400) {
    throw rest.name;
  }
  return rest;
}

function App() {
  const error = useSelector((state) => state.product.error);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const change = useSelector((state) => state.reviews.modal);

  const dispatch = useDispatch();
  let location = useLocation();
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(clearMsg());
  }, [location]);

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(getProducts()), 2000);
    }
  }, [error]);

  if (error) {
    return (
      <div>
        <GlobalStyle />
        <NavBar products={products} />
        <ErrorContainer>Error! No encontrado!</ErrorContainer>
      </div>
    );
  }
  if (loading)
    return (
      <ErrorContainer>
        <Loading />
      </ErrorContainer>
    );

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <ModalContainer>
          {change == true && (
            <Modal
              modalOpen={change}
              text={"lol"}
              handleClose={() =>
                change
                  ? dispatch(changeModalClose())
                  : dispatch(changeModalOPen())
              }
            />
          )}
        </ModalContainer>
        <GlobalStyle />
        <NavBar products={products} theme={theme} />

        {/* {location.pathname !== "/" ? <NavBar /> : null} */}
        <Routes>
          <Route
            exact
            path="/"
            element={<MainContainer products={products} theme={theme} />}
          />
          <Route
            path="/detail/:productId"
            element={<ProductDetail theme={theme} />}
          />
          <Route path="/login/" element={<Login />} />
          <Route path="/olvide-password" element={<ForgotPassword />} />
          <Route path="/olvide-password/:token" element={<ResetPassword />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/cart/" element={<ShoppingCart theme={theme} />} />

          <Route element={<RequireAuthUser isLogged={true} />}>
            <Route path="/profile/" element={<Profile theme={theme} />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route
              path="/profile/compras/:id"
              element={<Compras theme={theme} />}
            />
            <Route
              path="/profile/favoritos/:id"
              element={<Favoritos theme={theme} />}
            />
          </Route>

          <Route path="/confirmar/:id" element={<Confirmacion />} />

          <Route element={<RequireAuthAdmin isAllowed={true} />}>
            <Route
              path="/admin/dashboard/*"
              element={<DashboardAdmin theme={theme} />}
            />
          </Route>

          <Route
            path="/checkout/success/:idPedido"
            element={<CheckoutSuccess />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Footer />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
