/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fetchMovies } from "@/queries/fetchQueries";
import { MovieType } from "@/types/GlobalTypes";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";
import MovieCard from "./MovieCard";
import { useDebounced } from "@/hooks/useDebounced";
import ComponentWrapper from "./shared/ComponentWrapper";
import Spinner from "./ui/Spinner";

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
    const onIntersection = (items: IntersectionObserverEntry[]) => {
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

  // console.log(data?.pages[0].results);

  return (
    <ComponentWrapper className="py-10">
      <SearchInput
        setSearchValue={setSearchValue}
        className="sticky top-24 z-10"
      />

      {/* Data */}
      {status === "pending" ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="space-y-3">
          {data.pages.map((page, i) => (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
              key={i}
            >
              {page.results.map((movie: MovieType) => (
                <MovieCard key={movie?.id} movie={movie} />
              ))}
            </div>
          ))}

          {/* Loader */}
          <div ref={loadingRef}>
            {isFetchingNextPage ? (
              <Spinner />
            ) : hasNextPage ? (
              "Load More"
            ) : debouncedSearchTerm ? (
              "No data found"
            ) : (
              "Nothing more to load"
            )}
          </div>
          <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
        </div>
      )}
    </ComponentWrapper>
  );
};

export default Movie;
