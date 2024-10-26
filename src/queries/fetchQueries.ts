type FetchMoviePropsType = {
  queryKey: (string | { search: string })[];
  pageParam: number;
};

export const fetchMovies = async ({
  queryKey,
  pageParam,
}: FetchMoviePropsType) => {
  const [, { search }] = queryKey;
  // console.log(queryKey, pageParam);

  const url = search
    ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${pageParam}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${pageParam}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
};

export const fetchWatchList = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/watchlist`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch watch list");
  }

  return res.json();
}

export const removeFromWatchList = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/watchlist/${id}`;

  const res = await fetch(url, {
    method: 'DELETE'
  });

  if (!res.ok) {
    throw new Error("Failed to delete from watch list");
  }

  return res.json();
}
