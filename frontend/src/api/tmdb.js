const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

async function tmdbFetch(path) {
    const res = await fetch(`${BASE_URL}${path}&api_key=${API_KEY}`)
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
}

// This function will be for getting all movies as well
export function getPopularMovies(page=1) {
    return tmdbFetch(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
}

export function getTrendingMovies(timeline = "week") {
    return tmdbFetch(`/trending/movie/${timeline}?language=en-US`)
}

export function getTopRatedMovies(page=1) {
    return tmdbFetch(`/movie/top_rated?language=en-US&page=${page}`);
}

export function searchMovies(query) {
  return tmdbFetch(`/search/movie?query=${encodeURIComponent(query)}`);
}

// This function will be for getting all shows as well
export function getPopularShows(page=1) {
    return tmdbFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`);
}

export function getTrendingShows(timeline = "week") {
    return tmdbFetch(`/trending/tv/${timeline}?language=en-US`);
}

export function getTopRatedShows(page=1) {
    return tmdbFetch(`/tv/top_rated?language=en-US&page=${page}`);
}

export function searchShows(query, page=1) {
    return tmdbFetch(`/search/tv?query=${encodeURIComponent(query)}&language=en-US&page=${page}`);
}

