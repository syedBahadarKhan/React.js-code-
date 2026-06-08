import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    return (
        <>
         {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-52 sm:h-56 md:h-60 lg:h-64 object-cover"
              />

              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold mb-1">
                  {movie.Title}
                </h3>

                <p className="text-gray-500 text-sm mb-3">
                  {movie.Year}
                </p>

                <Link
                  to={`/movie/${movie.imdbID}`}
                  className="block text-center text-xs sm:text-sm bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
          </>
    )
}

export default MovieCard
