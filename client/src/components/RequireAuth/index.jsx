import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuthUser({isLogged}){
    const auth = useSelector(state => state.auth)
    const location = useLocation();

    return (
        auth?.isLoggedIn === isLogged
        ? <Outlet/>
        : <Navigate to='/login' state={{from: location}} replace/>
    )
}

export default RequireAuthUser
