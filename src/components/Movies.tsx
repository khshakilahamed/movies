/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fetchMovies } from "@/queries/fetchQueries";
import { MovieType } from "@/types/GlobalTypes";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import MovieCard from "./MovieCard";
import { useDebounced } from "@/hooks/useDebounced";

const Movie = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const loadingRef = useRef(null);
  // 838879a3547b46b2984c093d04fdb2f9

  //   console.log(searchValue);

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchValue,
    delay: 600,
  });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [
      "movies",
      {
        search: debouncedSearchTerm,
      },
    ],
    queryFn: fetchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  useEffect(() => {
    const onIntersection = (items: any) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  console.log(data?.pages[0].results);

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <SearchInput setSearchValue={setSearchValue} />

      {/* Data */}
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-4">
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((movie: MovieType) => (
                <MovieCard key={movie?.id} movie={movie} />
              ))}
            </React.Fragment>
          ))}
          <div ref={loadingRef}>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </div>
      )}
    </div>
  );
};

export default Movie;

// useEffect(() => {
//       const fetchMovies = async () => {
//             const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`);
//             const data = await res.json();

//             setMovieList(data);
//             setTotalPage(data?.total_pages)
//       }

//       const onIntersection = (items) => {
//             const loaderItem = items[0];

//             if (loaderItem.isIntersecting && (totalPage >= page)) {
//                   fetchMovies();
//             }
//         };

//         const observer = new IntersectionObserver(onIntersection);

//         if (observer && loadingRef.current) {
//             observer.observe(loadingRef.current);
//         }

//         // cleanup
//         return () => {
//             if (observer) observer.disconnect();
//         };

// }, [page, totalPage]);
