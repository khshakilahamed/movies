import { fetchMovieCast, fetchMovieDetails, fetchRecommendations } from "@/app/actions/movieDetailsActions";
import CastCard from "@/components/CastCard";
import MovieCard from "@/components/MovieCard";
import ComponentWrapper from "@/components/shared/ComponentWrapper";
import { MovieType } from "@/types/GlobalTypes";
import { Metadata } from "next";
import Image from "next/image";

export const revalidate = 60;

// Meta data
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movieDetails = await fetchMovieDetails(params.id);
  return {
    title: movieDetails.title,
  };
}

const MovieDetailsPage = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;

  try {
    // Fetch movie details, cast, and recommendations in parallel
    const [movieDetails, cast, recommendations] = await Promise.all([
      fetchMovieDetails(movieId),
      fetchMovieCast(movieId),
      fetchRecommendations(movieId),
    ]);

    // console.log(cast);
    // console.log('Fetching data for movie:', movieId);

    return (
      <ComponentWrapper className="my-10">
        {/* Movie Details */}
        <div className="grid sm:grid-cols-2 gap-5">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width={500}
            height={750}
          />
          <div className="">
            <h1 className="text-3xl font-bold">{movieDetails.title}</h1>
            {/* Genres */}
            <div className="genres space-x-2">
              {movieDetails.genres.map((genre) => (
                <span key={genre.id} className="bg-gray-500 px-2 py-1 rounded-full">
                  {genre.name}
                </span>
              ))}
            </div>
            <p>Release on: {movieDetails.release_date}</p>
            {/* Overview */}
            <div className="mt-5">
              <h2 className="text-2xl sm:text-3xl font-bold">Overview</h2>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="cast">
          <h2 className="text-2xl sm:text-3xl font-bold mt-10">Cast Members</h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
            {cast?.map((member) => (
              <CastCard key={member?.id} castMember={member} />
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-10">
            Related Movies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {recommendations.map((movie: MovieType) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </ComponentWrapper>
    );
  } catch (error) {
    // Display an error message if data fetching fails
    console.log(error);
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>Failed to load movie details. Please try again later.</p>
      </div>
    );
  }
};

export default MovieDetailsPage;
