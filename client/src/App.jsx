import { Route, Routes, useLocation } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import NavBar from "./components/Nav";
import ProductDetail from "./pages/Detail";
import AdminHub from "./pages/Admin";
import CreateUser from "./pages/CreateUser";
import ShoppingCart from "./pages/Cart";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      {/* {location.pathname !== "/" ? <NavBar /> : null} */}
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/admin/" element={<AdminHub />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/newUser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/" element={<ShoppingCart />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
