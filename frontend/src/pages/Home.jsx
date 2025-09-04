import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center text-[#ECDFCC] px-4 sm:px-6 md:px-10 py-8 space-y-8">
      <header className="bg-[#3C3D37] p-6 rounded-xl w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Discover & Rate Your Favorite Movies/Shows
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Browse trending movies/shows, leave reviews, and rate/rank your
          favorites.
        </h2>
      </header>

      <section
        id="about"
        className="bg-[#697565] p-6 rounded-xl w-full max-w-4xl"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
          Welcome to MovieRate
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
          MovieRate is your personal hub for tracking, rating, and discovering
          movies and TV shows. Keep a record of what you’ve watched, explore
          trending titles, and share your reviews with friends. Whether you’re a
          casual viewer or a film enthusiast, MovieRate makes managing your
          entertainment simple, fun, and social.
        </p>
      </section>

      <section
        id="features"
        className="bg-[#3C3D37] p-6 rounded-xl w-full max-w-4xl text-left sm:text-center"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">
          Why You’ll Love MovieRate
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg">
          <li>
            Track Your Watchlist – Keep a personalized list of all the movies
            and shows you’ve seen or plan to watch.
          </li>
          <li>
            Rate & Review – Give your opinion on movies and shows, and see what
            others think too.
          </li>
          <li>
            Discover Trending Titles – Stay up-to-date with the most popular and
            talked-about movies and shows.
          </li>
          <li>
            Explore by Genre – Quickly find movies in your favorite genres, from
            Action and Comedy to Sci-Fi and Drama.
          </li>
        </ul>
      </section>

      <section
        id="content_container"
        className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl"
      >
        <div id="how_it_works" className="flex-1 bg-[#697565] p-6 rounded-xl">
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-3">
            How It Works
          </h2>
          <ol className="list-decimal list-inside text-sm sm:text-base md:text-lg space-y-1">
            <li>Search and browse movies</li>
            <li>Rate and review them</li>
            <li>Save your favorites</li>
          </ol>
        </div>
        <div id="call_to_action" className="flex-1 bg-[#697565] p-6 rounded-xl">
          <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-3">
            Your Call-to-Action
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            You’re encouraged to sign up or just start exploring!
          </p>
          <Link to='authenticate'><button className="bg-[#ECDFCC] text-black font-bold px-4 py-2 rounded hover:bg-gray-200">
            Sign Up / Login
          </button></Link>
        </div>
      </section>
    </div>
  );
}
