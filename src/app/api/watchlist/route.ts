import { MovieType } from "@/types/GlobalTypes";
import { readWatchList, writeWatchList } from "@/utils/jsonFileReadWrite";
import { NextResponse } from "next/server";


// GET: Fetch the watchlist
export async function GET() {
  const watchList = readWatchList();
  return NextResponse.json(Object.values(watchList));
}

// POST: Add a movie to the watchlist
export async function POST(request: Request) {
  const movie: MovieType = await request.json();
  const watchList = readWatchList();

  // Add the new movie to the watchlist
  watchList[movie.id] = movie;

  // Save the updated watchlist
  writeWatchList(watchList);

  return NextResponse.json(Object.values(watchList));
}
