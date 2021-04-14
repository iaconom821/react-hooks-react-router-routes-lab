import React from "react";
import { movies } from "../data";

function Movies() {
  const makeMovies = movies.map(movie=>{
    return (
      <div key={movie.title}>
        <h3>Name: { movie.title }</h3>
        <p>Time: {movie.time }</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre => { return <li key={genre}>{genre}</li>})}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movies Page</h1>
      { makeMovies }
  </div>;
}

export default Movies;
