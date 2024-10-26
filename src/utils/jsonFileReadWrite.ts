import fs from "fs";
import path from "path";
import { MovieType } from "@/types/GlobalTypes";

// Path to the JSON file
const watchListFilePath = path.join(process.cwd(), "public", "watchlist.json");

// Function to read from the JSON file
export function readWatchList() {
  const data = fs.readFileSync(watchListFilePath, "utf-8");
  return JSON.parse(data);
}

// Function to write to the JSON file
export function writeWatchList(watchList: Record<number, MovieType>) {
  fs.writeFileSync(watchListFilePath, JSON.stringify(watchList, null, 2));
}