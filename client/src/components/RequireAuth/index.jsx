import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuth({isAdmin}){
    const auth = useSelector(state => state.auth)
    const location = useLocation();
    return (
        auth?.user?.isAdmin === isAdmin && auth?.isLoggedIn
        ? <Outlet/>
        : auth?.isLoggedIn
            ? <Navigate to='/' state={{from: location}} replace/>
            : <Navigate to='/login' state={{from: location}} replace/>
    )
}

export default RequireAuth