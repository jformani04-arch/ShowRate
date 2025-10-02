import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb.js";
import headerImage from "../assets/movieTheatre.jpg";

function MovieGallery() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function handleMovies() {
      try {
        let data;
        if (search.trim() === "") {
          data = await getPopularMovies(page);
        } else {
          data = await searchMovies(search);
        }

        if (data && data.results) {
          setMovies((prev) =>
            page === 1 || search.trim() !== ""
              ? data.results
              : [...prev, ...data.results]
          );
        }
      } catch (err) {
        console.error(err);
      }
    }
    handleMovies();
  }, [page, search]);

  async function addToRankedList(movie) {
    try {
      const res = await fetch("http://localhost:3000/api/rankedList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          tmdbId: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          rank: 0, // default rank
        }),
      });

      const data = await res.json();
      console.log("Added to ranked list:", data);
      alert(`${movie.title} added to your ranked list!`);
    } catch (err) {
      console.error(err);
    }
  }

  function handlePage() {
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <div
        id="header"
        className="flex flex-col mt-15 h-80 p-15"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center sm:text-left text-white">
          <h1 className="text-3xl sm:text-5xl mb-2 font-bold">Welcome</h1>
          <h2 className="text-xl sm:text-3xl font-semibold">
            Explore Our Entire Gallery of Movies!
          </h2>
        </div>

        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search For a Movie"
          className="bg-white rounded-lg w-full sm:w-2/3 lg:w-1/2 h-10 mt-5 mx-auto sm:mx-0 p-5"
        />
      </div>

      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-5 gap-y-10">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <div key={movie.id} className="w-48 h-80 mb-5">
                  <img
                    className="rounded-t-xl h-64 w-full object-cover"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="flex flex-col bg-[#3C3D37] min-h-25 rounded-b-lg text-center justify-center pt-1">
                    <p className="font-bold text-[#ECDFCC]">{movie.title}</p>
                    <p className="text-[#ECDFCC]">{movie.release_date}</p>

                    <div className="flex justify-evenly mt-auto">
                      <button
                        className="hover:scale-120 transition-transform duration-200 cursor-pointer"
                        onClick={() => addToRankedList(movie)}
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePage}
          className="bg-[#ECDFCC] px-4 py-2 text-black rounded-3xl hover:scale-110 transition-transform duration-200 cursor-pointer"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default MovieGallery;
