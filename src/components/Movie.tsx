"use client";

import React, { useEffect, useRef, useState } from 'react';

const Movie = () => {
      const [movieList, setMovieList] = useState([]);
      const [page, setPage] = useState(1);
      const [totalPage, setTotalPage] = useState(0);
      const loadingRef = useRef(null);
      // 838879a3547b46b2984c093d04fdb2f9

      useEffect(() => {
            const fetchMovies = async () => {
                  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`);
                  const data = await res.json();

                  setMovieList(data);
                  setTotalPage(data?.total_pages)
            }

            const onIntersection = (items) => {
                  const loaderItem = items[0];
      
                  if (loaderItem.isIntersecting && (totalPage >= page)) {
                        fetchMovies();
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

            
      }, [page, totalPage]);

      

      return (
            <div>

                  <p ref={loadingRef}>Loading</p>
            </div>
      );
};

export default Movie;