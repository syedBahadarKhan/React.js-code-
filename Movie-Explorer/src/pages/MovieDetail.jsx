import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  // Dummy data (replace later with API)
  useEffect(() => {
     async function fetchMovie() {
      const res = await fetch(`http://www.omdbapi.com/?apikey=324b0e26&i=${id}`)
      const data = await res.json()
      setMovie(data)
    }
    fetchMovie()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-10 flex items-center justify-center">

      {/* Main Card */}
      <div className="max-w-5xl w-full bg-gray-800 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Movie Poster */}
        <div className="w-full h-full">
          <img
            src={movie?.Poster}
            alt={movie?.Title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">

          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">
            {movie?.Title}
          </h1>

          <p className="mb-3 text-gray-300">
            <span className="font-semibold text-white">Genre:</span> {movie?.Genre}
          </p>

          <p className="mb-3 text-gray-300">
            <span className="font-semibold text-white">Released:</span> {movie?.Released}
          </p>

          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Plot:</span> {movie?.Plot}
          </p>

          {/* Button */}
          <button className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Watch Trailer
          </button>

        </div>
      </div>
    </div>
  )
}

export default MovieDetail