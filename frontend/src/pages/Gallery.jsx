import React, { useState, useEffect } from "react";
import SearchBar from "../components/ui/SearchBar.jsx";

function Gallery() {
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");

  async function getMovie() {
    try {
      const endpoint = search
        ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            search
          )}&language=en-US&page=${pages}&api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc&api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`;

      const response = await fetch(endpoint);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (pages === 1) {
        setMovieList(data.results);
      } else {
        setMovieList((prev) => [...prev, ...data.results]);
      }
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getMovie();
  }, [search, pages]);

  function handleLoad() {
    setPages((p) => p + 1);
  }

  function handleChange(event) {
    setSearch(event.target.value);
    setPages(1); // reset page when new search starts
  }

  return (
    <>
      <div className="flex bg-[#ECDFCC] h-10 m-10 rounded-lg justify-evenly items-center">
        <button>PlaceHolder</button>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search Movies"
          className="border bg-white h-5 rounded-lg text-center"
        />
        <button>Filter</button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {movieList
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div
              key={movie.id}
              className="flex flex-col items-center h-full w-50"
            >
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
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoad}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:scale-95 transition"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default Gallery;
