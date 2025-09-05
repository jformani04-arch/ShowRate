import React, { useState, useEffect } from "react";

function Gallery() {
  const [movieList, setMovieList] = useState([]);

  async function getMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setMovieList((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  function handleLoad() {
    setMovieList((prev) => [...prev, ...data.results]);
  }

  return (
    <div>
      {movieList.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
}

export default Gallery;
