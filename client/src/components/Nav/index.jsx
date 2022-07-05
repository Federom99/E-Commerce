import { NavLink } from "react-router-dom";

export default function NavBar (){
    return(
        <div>
            <ul>
                <li><NavLink to='/main'>Home</NavLink></li>
                <li><NavLink to='/admin'>Admin</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
                <li><NavLink to='/newUser'>Sign Up</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                
            </ul>
        </div>
    )
}