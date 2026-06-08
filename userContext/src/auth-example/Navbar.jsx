import { useContext } from "react";
import { AuthContext } from "./authContext.jsx";

const NavBar = () =>{
    const {isloggedIn, login, logout} = useContext(AuthContext)

    return (
        <nav>
            {isloggedIn ? (
                <button onClick={logout} style={{backgroundColor:"#000", color:"#f76c6c"}}>Logout</button>
            ) : (
                <button onClick={login} style={{backgroundColor:"#2c8fe5", color:"#fff"}}>Login</button>
            )}
        </nav>
    )
}

export default NavBar