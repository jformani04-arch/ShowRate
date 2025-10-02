import { useEffect, useState } from "react";

function ListsPage() {
  const [rankedList, setRankedList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const res = await fetch("http://localhost:3000/api/rankedList", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Ranked list fetched:", data);
        setRankedList(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchList();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Your Ranked List</h1>

      {rankedList.length === 0 ? (
        <p>No movies in your list yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {rankedList.map((movie) => (
            <div key={movie.tmdbId} className="border rounded-lg overflow-hidden">
              <img
                src={
                  movie.posterPath
                    ? `https://image.tmdb.org/t/p/w200${movie.posterPath}`
                    : "/uploads/default-avatar.png"
                }
                alt={movie.title}
                className="w-full"
              />
              <div className="p-2">
                <p className="font-bold">{movie.title}</p>
                <p>Rank: {movie.rank}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListsPage;
