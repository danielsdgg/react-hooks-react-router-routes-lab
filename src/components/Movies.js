import React from "react";
import { movies } from "../data";


const Movies = () => {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}><h1>{movie.title}</h1>
      <p>Runtime: {movie.time} min.
      </p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1> {movieItems}
    </div>
  );
};

export default Movies;