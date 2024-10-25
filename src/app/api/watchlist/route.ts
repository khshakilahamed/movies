import { NextResponse } from "next/server";
import { MovieType } from "@/types/GlobalTypes";

export const watchList: Record<number, MovieType> = {};

export async function GET() {
  return NextResponse.json(Object.values(watchList));
}

export async function POST(request: Request) {
  const movie: MovieType = await request.json();
  watchList[movie.id] = movie;
//   console.log(watchList);
  return NextResponse.json(Object.values(watchList));
}
