import { useState, useEffect } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(1); // added pages state
  const [movies, setMovies] = useState([]); // store fetched movies

  async function getMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pages}&sort_by=popularity.desc&api_key=${
          import.meta.env.VITE_TMDB_KEY
        }`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  }

  useEffect(() => {
    getMovie();
  }, [pages]); // runs when pages changes

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      

      
     
    </>
  );
}
