import React from "react";
import Navbar from "./auth-example/Navbar.jsx";
import { AuthProvider } from "./auth-example/authContext.jsx";


function App() {
  return (
    <>
     <AuthProvider>
        <Navbar />
     </AuthProvider>
    </>
  );
}

export default App;

















// import { createContext, useContext } from "react"
// const UserContext = createContext()

// function App() {
//  const User = "Syed Bahadar Khan";

//   return (
//     <>
//       <UserContext.Provider value ={User}>
//             <Parent/>
//       </UserContext.Provider>
//     </>
//   )
// }






// function Parent() {
//   return (
//     <div>
//        <Child/>
//     </div>
//   )
// }

// function Child() {
//   return (
//     <div>
//         <Grandchild/>
//     </div>
//   )
// }
// function Grandchild() {
//   const user = useContext(UserContext)
//   return (
    
//     <div>
//       <p>Hello {user}</p>
//     </div>
//   )
// }




// export default App

// import React from "react";
// import Navbar from "./Navbar";

//  function App() {
//   return (
//     <div className="app-container">
//       <Navbar />
//       <main className="app-main">
//         <h1 className="app-title">Welcome to the App</h1>
//         <p className="app-copy">
//           Use the button above to toggle theme mode.
//         </p>
//       </main>
//     </div>
//   );
// }

// export default App;
