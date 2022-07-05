import { Route, Routes , useLocation } from 'react-router-dom'
import MainContainer from './containers/MainContainer'
import LandingPage from './components/Landing'
import NavBar from './components/Nav'
import ProductDetail from './components/Detail'
import AdminHub from './components/Admin'
import CreateUser from './components/CreateUser'
import ShoppingCart from './components/Cart'
import Profile from './components/Profile'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle/>
      {location.pathname !== '/' ? <NavBar/> : null}
      <Routes>  
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/main' element={<MainContainer/>}/>
        <Route path='/detail/:productId' element={<ProductDetail/>}/>
        <Route path='/admin/' element={<AdminHub/>}/>
        <Route path='/newUser' element={<CreateUser/>}/>
        <Route path='/cart/'  element={<ShoppingCart/>}/>
        <Route path='/profile/'  element={<Profile/>}/>
      </Routes>
      
    </div>
  )
}

export default App
