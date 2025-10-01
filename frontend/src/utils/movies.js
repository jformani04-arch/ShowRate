import { apiFetch } from "./api.js";

export const toggleLikeMovie = (tmdbId) =>
  apiFetch(`/api/movies/like/${tmdbId}`, { method: "POST" });

export const rateMovie = (tmdbId, score) =>
  apiFetch(`/api/movies/rate/${tmdbId}`, {
    method: "POST",
    body: JSON.stringify({ score }),
  });

export const createList = (name, movies = []) =>
  apiFetch("/api/movies/lists", {
    method: "POST",
    body: JSON.stringify({ name, movies }),
  });

export const updateList = (listId, data) =>
  apiFetch(`/api/movies/lists/${listId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteList = (listId) =>
  apiFetch(`/api/movies/lists/${listId}`, { method: "DELETE" });
