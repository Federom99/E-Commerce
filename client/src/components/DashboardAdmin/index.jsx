import { Link, Route, Routes } from 'react-router-dom'
import Users from '../../pages/Admin/users'
import Products from '../../pages/Admin/products'
import Sales from '../../pages/Admin/sales';
import Admin from '../../pages/Admin';
import './Dashboard.css'
import { ToastContainer } from 'react-toastify';

export default function DashboardAdmin({theme}) {
    return (
        <div className='contenedor'>
            {
            theme === 'light' ? (
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progress={undefined}
                />) : (
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                progress={undefined}
                theme={'dark'}
                />
            )
            }
            <div className='sideBar'>
                <h1>MENU</h1>

                <Link to="/admin/dashboard/">Inicio</Link>

                <Link to="/admin/dashboard/users">Usuarios</Link>

                <Link to="/admin/dashboard/products">Productos</Link>

                <Link to="/admin/dashboard/sales">Pedidos</Link>

                {/* <a href="#">Menu</a>
                    <a href="#">Usuarios</a>
                    <a href="#">Productos</a>
                    <a href="#">Ventas</a> */}
            </div>
            <div className='body'>
            <Routes>
                    <Route path="/" element={<Admin />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="sales" element={<Sales />} />
            </Routes>
            </div>
        </div>
    )
}