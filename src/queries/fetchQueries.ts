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
