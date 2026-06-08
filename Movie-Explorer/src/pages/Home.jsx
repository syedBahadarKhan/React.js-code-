import { useState, useEffect, Link, useRef } from "react"
import Movielist from "../components/MovieList"
function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    const fetchMoviesData = async (query) =>{
        setLoading(true)
        const res = await fetch(`http://www.omdbapi.com/?apikey=324b0e26&s=${query}`)
        const data = await res.json()
        console.log(data)
        setMovies(data.Search || [])
        setLoading(false)
    }

    useEffect(() =>{
        fetchMoviesData("avengers")
    }, [])

    const handleSearch = (e) =>{
        e.preventDefault()
        const query = inputRef.current.value  
        if(query) fetchMoviesData(query)
    }


    return(
         <div className="min-h-screen bg-gray-100 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10" onSubmit={handleSearch}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search your favorite movie..."
            className="w-full sm:w-3/4 md:w-1/2 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2.5 rounded-lg transition">
            Search
          </button>
        </form>
        {loading ? <p>Loading</p> : <Movielist movies={movies}/>}
      </div>
    )
}

export default Home