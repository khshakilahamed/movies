"use server";

import { CastMember, MovieDetails, MovieType } from "@/types/GlobalTypes";

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};

export const fetchMovieCast = async (
  movieId: string
): Promise<CastMember[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch cast details");
  const data = await res.json();
  return data.cast;
};

export const fetchRecommendations = async (
  movieId: string
): Promise<MovieType[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch recommendations");
  const data = await res.json();
  return data.results;
};
