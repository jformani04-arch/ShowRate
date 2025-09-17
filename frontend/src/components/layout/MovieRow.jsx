import React, { useRef } from "react";

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="my-8 relative">
      {/* Row Title */}
      <h2 className="text-[#ECDFCC] text-3xl font-bold mb-4 ml-4">{title}</h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute h-50 left-0 top-1/2 -translate-y-1/2 bg-[#ECDFCC]/80 text-black px-3 py-2 rounded z-10"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute h-50 right-0 top-1/2 -translate-y-1/2 bg-[#ECDFCC]/80 text-black px-3 py-2 rounded z-10"
      >
        &#8594;
      </button>

      {/* Scroll Container */}
      <div
        ref={rowRef}
        className="flex gap-5 h-90 overflow-x-auto hide-scrollbar scroll-smooth px-4 py-4"
      >
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div
              key={movie.id}
              className="w-48 h-80 flex-shrink-0 rounded-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="rounded-t-lg h-64 w-full object-cover"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="flex flex-col bg-[#3C3D37] text-center justify-center pt-1 rounded-b-lg min-h-[4rem]">
                <span className="font-bold text-[#ECDFCC]">{movie.title}</span>
                <span className="text-[#ECDFCC] text-sm">
                  {movie.release_date}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MovieRow;
