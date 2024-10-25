"use client";

import ComponentWrapper from "@/components/shared/ComponentWrapper";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { fetchWatchList } from "@/queries/fetchQueries";
import { MovieType } from "@/types/GlobalTypes";
import { formatNumber } from "@/utils/numberFormat";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const WatchList = () => {

      const { data: watchList, isPending } = useQuery({ queryKey: ['watch-list'], queryFn: fetchWatchList });

      console.log(watchList);

      return (
            <ComponentWrapper>
                  {
                        isPending && <div className="mt-6">
                              <Spinner />
                        </div>
                  }
                  <div className="my-10 flex flex-col gap-3">
                        {
                              watchList?.map((movie: MovieType) => <div key={movie?.id} className="border border-gray-300 dark:border p-2">
                                    <div className="flex gap-5">
                                          <Link href={`/movie-details/${movie?.id}`}>
                                                <Image
                                                      src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                                                      alt={movie?.title}
                                                      width={100}
                                                      height={200}
                                                />
                                          </Link>
                                          <div className="">
                                                <Link href={`/movie-details/${movie?.id}`}>
                                                      <h3 className="font-bold md:text-xl mt-2 hover:underline">{movie.title}</h3>
                                                </Link>
                                                <p className="flex items-center gap-1">
                                                      <FaStar className="text-yellow-500 mb-1" />
                                                      {movie?.vote_average?.toFixed(1)}
                                                      <span className="text-gray-500 dark:text-gray-400">
                                                            ({formatNumber(movie?.vote_count)})
                                                      </span>
                                                </p>

                                                {/* Action Buttons */}
                                                <Button
                                                      title="Remove from watch list"
                                                // onClick={() => handleDeleteFromWatchList(movie?.id)}
                                                >
                                                      <RiDeleteBin6Line className="text-3xl text-red-500" />
                                                </Button>
                                          </div>

                                    </div>
                              </div>)
                        }
                  </div>
            </ComponentWrapper>
      );
};

export default WatchList;