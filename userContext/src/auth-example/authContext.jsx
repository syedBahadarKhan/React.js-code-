import { useContext,  createContext, useState} from "react";
const AuthContext = createContext()

const AuthProvider = ({ children }) =>{
       const [isloggedIn, setIsLoggedIn] = useState(false)
       const login = () => setIsLoggedIn(true)
       const logout = () => setIsLoggedIn(false)

       return (
        <AuthContext.Provider value={{isloggedIn, login, logout}}>   
            {children}
        </AuthContext.Provider>
       )

}

export {AuthProvider, AuthContext}