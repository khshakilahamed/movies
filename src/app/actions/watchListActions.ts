'use server';

import { MovieType } from "@/types/GlobalTypes";

export const addToWatchList = async (data: MovieType) => {
      try {
            // Call the API endpoint to add the movie to the watchlist
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/watchlist`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
            });

            if (!response.ok) {
                  throw new Error('Failed to add to watch list');
            }

            const result = await response.json();

            // console.log('Added to watch list:', result);

            return result;
      } catch (error) {
            console.error('Error adding to watch list:', error);
            throw error;
      }
}

export const getFromWatchList = async () => {
      try {
            // Call the API endpoint to get the movie to the watchlist
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/watchlist`);

            if (!response.ok) {
                  throw new Error('Failed to add to watch list');
            }

            const result = await response.json();

            // console.log('Added to watchlist:', result);

            return result;
      } catch (error) {
            console.error('Failed to fetched', error);
            throw error;
      }
}

export const deleteFromWatchList = async (id: number) => {
      try {
            // Call the API endpoint to get the movie to the watchlist
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/watchlist/${id}`, {
                  method: 'DELETE',
            });

            if (!response.ok) {
                  throw new Error('Failed to delete from watch list');
            }

            const result = await response.json();

            // console.log('Added to watchlist:', result);

            return result;
      } catch (error) {
            console.error('Failed to delete', error);
            throw error;
      }
}