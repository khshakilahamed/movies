import { MovieType } from "@/types/GlobalTypes";
import React from "react";

const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <div key={movie.id}>
      {/* <Image src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={300} height={300} alt={movie?.title} className="w-[300px]"/> */}
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
