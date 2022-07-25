import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function RequireAuthAdmin({isAdmin}){
    const auth = useSelector(state => state.auth)
    const location = useLocation();

    return (
        auth?.user.isAdmin === isAdmin
        ? <Outlet/>
        : <Navigate to='/' state={{from: location}} replace/>
    )
}

export default RequireAuthAdmin