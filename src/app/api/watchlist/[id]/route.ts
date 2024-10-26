import { readWatchList, writeWatchList } from "@/utils/jsonFileReadWrite";
import { NextResponse } from "next/server";


// DELETE: Remove a movie from the watchlist
export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const watchList = readWatchList();

  // Delete the movie by its ID
  delete watchList[Number(id)];

  // Save the updated watchlist
  writeWatchList(watchList);

  return NextResponse.json(Object.values(watchList));
}
