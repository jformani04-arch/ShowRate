import React, { useState, useEffect } from "react";
import SearchBar from '../components/ui/SearchBar.jsx'

function Gallery() {
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState(1);

  async function getMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc&api_key=${
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
  }, [pages]);

  function handleLoad() {
    setPages((p) => p + 1);
  }

  return (
    <>
    <SearchBar />
      <div className="flex flex-wrap justify-center gap-4">
        {movieList.map((movie) => (
          <div key={movie.id} className="flex flex-col items-center w-40">
            <img
              className="m-2 mb-0 w-full rounded-lg rounded-b-none shadow-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="flex flex-col bg-[#3C3D37] p-2 text-sm text-[#ECDFCC] justify-center text-center w-full h-20 rounded-lg rounded-t-none">
              <span>{movie.title}</span>
              <div className="flex justify-evenly mt-2">
                <button
                  title="Add to List"
                  className="hover:cursor-pointer hover:scale-110 active:scale-95 transition transform"
                >
                  ➕
                </button>
                <button
                  title="Favorite"
                  className="hover:cursor-pointer hover:scale-110 active:scale-95 transition transform"
                >
                  ⭐
                </button>
                <button
                  title="Remove From List"
                  className="hover:cursor-pointer hover:scale-110 active:scale-95 transition transform"
                >
                  ➖
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleLoad}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default Gallery;
