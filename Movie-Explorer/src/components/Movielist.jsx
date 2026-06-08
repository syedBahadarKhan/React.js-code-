import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    if(movies.length === 0){
        return <p>Movies Not Found</p>
    }
    return (
    <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
          gap-5 sm:gap-6 lg:gap-8
        ">
           {movies.map((movie) =>(
                 <MovieCard key={movie.imdbID} movie={movie} />
           ))}
       

        </div>
       
    )
}

export default MovieList
