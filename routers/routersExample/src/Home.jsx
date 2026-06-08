import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
    const navigate = useNavigate()
    const gotoAbout = () =>{
        navigate('/about')
    }
    return (
        <div>
            <h2>Welcome to the home page</h2>
            <button onClick={gotoAbout}>Go to about</button>
        </div>
    )
}

export default Home
