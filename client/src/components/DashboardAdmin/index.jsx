import { Link, Route, Routes } from 'react-router-dom'
import Users from '../../pages/Admin/users'
import Products from '../../pages/Admin/products'
import Sales from '../../pages/Admin/sales';
import './Dashboard.css'

export default function DashboardAdmin() {
    return (
        <div className='contenedor'>
            <div className='sideBar'>
                <h1>MENU</h1>

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
                    <Route path="/" element={<Users />} />
                    <Route path="users" element={<Users />} />
                    <Route path="products" element={<Products />} />
                    <Route path="sales" element={<Sales />} />
            </Routes>
            </div>
        </div>
    )
}