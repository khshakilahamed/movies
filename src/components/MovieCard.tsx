import { MovieType } from "@/types/GlobalTypes";
import { formatNumber } from "@/utils/numberFormat";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

// Backdrop path
// https://image.tmdb.org/t/p/w1280/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg

const MovieCard = ({ movie }: { movie: MovieType }) => {
  return (
    <div key={movie.id} className="border border-gray-300 dark:border p-2">
      {/* <Image src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={300} height={300} alt={movie?.title} className="w-[300px]"/> */}
      <p>{movie.title}</p>
      <p className="flex items-center gap-1">
        <FaStar className="text-yellow-500 mb-1" />
        {movie?.vote_average.toFixed(1)}
        <span className="text-gray-500 dark:text-gray-400">
          ({formatNumber(movie?.vote_count)})
        </span>
      </p>
      <button title="Add to watch list">
        <MdFavoriteBorder className="text-3xl text-red-500" />
      </button>
      <button title="Remove from watch list">
        <MdFavorite className="text-3xl text-red-500" />
      </button>
    </div>
  );
};

export default MovieCard;
