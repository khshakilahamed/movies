"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  addToWatchList,
} from "@/app/actions/watchListActions";
import { MovieType } from "@/types/GlobalTypes";
import { formatNumber } from "@/utils/numberFormat";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Button from "./ui/Button";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: MovieType }) => {
  // const [isInWatchList, setIsInWatchList] = useState<boolean>(false);
  // const [watchListCache, setWatchListCache] = useState<MovieType[]>([]);

  // useEffect(() => {
  //   // Check if the movie is already in the watchlist
  //   const fetchWatchList = async () => {
  //     const data = await getFromWatchList();
  //     setWatchListCache(data);
  //     setIsInWatchList(data.some((m: MovieType) => Number(m.id) === movie.id));
  //   };

  //   fetchWatchList();
  // }, [movie.id]);

  const handleAddToWatchList = async (movie: MovieType) => {
    // Optimistic UI update
    // setWatchListCache([...watchListCache, movie]);
    // setIsInWatchList(true);

    try {
      await addToWatchList(movie);
      toast.success("Added to the watch list");
    } catch (_error) {
      // setWatchListCache(watchListCache.filter((m) => m.id !== movie.id)); // Revert on failure
      // setIsInWatchList(false);
      toast.error("Failed to add to the watch list");
    }
  };

  // const handleDeleteFromWatchList = async (id: number) => {
  //   const previousWatchList = watchListCache;

  //   // Optimistic UI update
  //   setWatchListCache(watchListCache.filter((m) => m.id !== id));
  //   setIsInWatchList(false);

  //   try {
  //     await deleteFromWatchList(id);
  //     toast.success("Deleted from the watch list");
  //   } catch (_error) {
  //     setWatchListCache(previousWatchList); // Revert on failure
  //     setIsInWatchList(true);
  //     toast.error("Failed to delete from the watch list");
  //   }
  // };

  return (
    <div key={movie.id} className="border border-gray-300 dark:border p-2 flex flex-col justify-between h-full">
      <div>
        <div className="overflow-hidden">
          <Link href={`/movie-details/${movie?.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              width={300}
              height={200}
              alt={movie?.title}
              loading="lazy"
              className="w-[300px] h-[200px] md:h-[300px] hover:scale-110 duration-300"
            />
          </Link>
        </div>
        <Link href={`/movie-details/${movie?.id}`}>
          <h3 className="font-bold md:text-xl mt-2 hover:underline">{movie.title}</h3>
        </Link>
      </div>

      {/* Bottom Section - Rating and Actions */}
      <div className="flex flex-wrap justify-between items-center mt-auto">
        <p className="flex items-center gap-1">
          <FaStar className="text-yellow-500 mb-1" />
          {movie?.vote_average?.toFixed(1)}
          <span className="text-gray-500 dark:text-gray-400">
            ({formatNumber(movie?.vote_count)})
          </span>
        </p>

        {/* Action Buttons */}
        <Button
          title="Add to watch list"
          onClick={() => handleAddToWatchList(movie)}
        >
          <MdFavoriteBorder className="text-3xl text-red-500" />
        </Button>
        {/* {isInWatchList ? (
          <Button
            title="Remove from watch list"
            onClick={() => handleDeleteFromWatchList(movie?.id)}
          >
            <MdFavorite className="text-3xl text-red-500" />
          </Button>
        ) : (
          <Button
            title="Add to watch list"
            onClick={() => handleAddToWatchList(movie)}
          >
            <MdFavoriteBorder className="text-3xl text-red-500" />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default MovieCard;
