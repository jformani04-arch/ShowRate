import { Link } from "react-router-dom";
import headerBg from "../assets/headerBg.png";
import { getTopRatedMovies } from "../api/tmdb";
import { getTrendingMovies } from "../api/tmdb";
import { useState, useEffect } from "react";
import MovieRow from "../components/layout/MovieRow";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [topRated, setTopRated] = useState([]);
  const [topDaily, setTopDaily] = useState([]);
  const [topWeekly, setTopWeekly] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchTopRated() {
      try {
        const data = await getTopRatedMovies();
        if (data.results) {
          setTopRated(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopRated();
  }, []);

  useEffect(() => {
    async function fetchTopWeekly() {
      try {
        const data = await getTrendingMovies();
        if (data.results) {
          setTopWeekly(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopWeekly();
  }, []);

  useEffect(() => {
    async function fetchTopDaily() {
      try {
        const data = await getTrendingMovies("day");
        if (data.results) {
          setTopDaily(data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchTopDaily();
  }, []);

  return (
    <div className="flex flex-col ">
      <header
        className="flex flex-col mt-30 mx-20 bg-center h-[600px] text-center justify-center rounded-4xl border-1 border-white items-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <p className="text-white text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Start Rating Movies Now!
        </p>
        <div className="mt-5 px-6 py-3 bg-black/60 text-white text-lg font-semibold rounded-lg hover:bg-black/80 transition">
          {user ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login / Sign Up</Link>
          )}
        </div>
      </header>

      <div className="min-h-screen p-4">
        <MovieRow title="Top Rated of All Time" movies={topRated} />
        <MovieRow title="Top Daily Trending" movies={topDaily} />
        <MovieRow title="Top Weekly Trending" movies={topWeekly} />
      </div>
    </div>
  );
}

// Top Section

// Profile image/avatar (uploadable, default if none).

// Last active timestamp, under the profile image.

// Friends/followers count near the top.

// Logout and Settings buttons, visible near the top for quick access.

// Middle Section

// Username prominently displayed.

// Bio/description section (plain text, editable).

// Highlights/stats:

// Total movies rated.

// Average rating given.

// Favorite genre(s).

// Top 3 rated movies/shows/animes (optional as text or small cards).

// Bottom Section

// Date joined, at the very bottom of the page.
