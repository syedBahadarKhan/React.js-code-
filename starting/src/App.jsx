// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Hello from './hello.jsx'
import Component from './arr.jsx'
import Newcomponent from './conditonal.jsx'
import Props from './props.jsx'
import Button from './Button.jsx'
// import './App.css'

function App() {

          const hobbies = ["coding", "reading", "traveling"]
          function Message(){
            alert("this is a message from props component")
          }

        return(
          <>
          {/* <Hello/>
           <Hello/> */}
           <Props fullname="Bahadar Khan" age={25} city="Peshawar" hobbies={hobbies}/>
           <Props fullname="salman khan" age={60} city="Mumbai"/>
           <Button label="click Me" handleClick={Message}/>
          {/* <Component/>
          <Newcomponent/> */}
          </>
        )

        
}

export default App
