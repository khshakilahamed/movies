## Important Link

- Live Site Link: [Click Me](https://movies-one-alpha.vercel.app/)

## Important Packages-
- `tanstack query`
- `react hook form`
- `tailwindCSS`
- `tailwind merge`
- `react icons`
- `react hot toast`

## What have I done this project?

### Home Page:

- The Home Page is implemented using Client-Side Rendering (CSR).
- Implemented Responsiveness for multiple devices.
- Movie List
  - The initial view displays 20 movie items when the user visits the website.
  - Data is fetched automatically as the user scrolls down the page to enable infinite scrolling.
  - `how to implement`
    - Infinite scrolling is achieved using `tanstack query` and `IntersectionObserver`.
- Searching
  - Implemented search functionality using `React Hook Form` for validation.
  - A `debouncer` with a delay of `600ms` is used to minimize extra API calls during search.
  - Infinite scrolling is also applied when searching, utilizing `tanstack query` and `IntersectionObserver`.

### Movie Card

- The Movie Card is implemented as a Client Component.
- It displays basic movie information, including:
  - **Movie Poster**
  - **Movie Title**
  - **Average Vote** (displayed as Rating)
  - **Vote Count** (displayed as the number of voters)
- Navigation to the **Movie Details** page is triggered by clicking the **Poster** or **Title**.
- Includes a "Watch List" button:
  - Clicking the button adds the movie to the user's watch list.
  - Displays a notification using a toaster upon successful addition.
- `how to implement`
  - Relevant server actions are created for watch list management:
    - `addToWatchList`, `getFromWatchList`, and `deleteFromWatchList` are located in `/app/actions/watchListActions.ts`.
  - When the "Watch List" button is clicked, the `addToWatchList` action is called to store the movie data.

### Movie Details Page

- The Movie Details Page is implemented using Server-Side Rendering (SSR) with Incremental Static Regeneration (ISR).
- The page data is revalidated every 60 seconds.
- Users can view detailed movie information, including:
  - **Movie Poster**
  - **Movie Title**
  - **Release Date**
  - **Genres**
  - **Movie Overview**
  - **Cast Members**
  - **Related Movies**
- Users can add Related Movies to the watch list or navigate to the corresponding Movie Details page.

- `how to implement`
  - Relevant server actions are created to display movie details and related content:
    - `fetchMovieDetails`, `fetchMovieCast`, and `fetchRecommendations` are located in `/app/actions/movieDetailsActions.ts`.
  - The `fetchMovieDetails`, `fetchMovieCast`, and `fetchRecommendations` actions are executed concurrently using `Promise.all` to efficiently fetch all necessary data.

### Watch List Page

- The Watch List Page displays all the movies saved in the user's watch list.
- Users can remove a movie from the watch list by clicking the "Delete" button.
- `how to implement`
  - The watch list is fetched using the `useQuery` hook from `tanstack query`.
    - To delete a movie from the watch list, the `useMutation` hook (also from `tanstack query`) is used.
      - When the "Delete" button is clicked, the `mutate` function is called to remove the movie.
      - After a successful deletion, the watch list data is refreshed by calling the `refetch` function.
    - Relevant server actions, such as `getFromWatchList` and `deleteFromWatchList`, are integrated with the `useQuery` and `useMutation` hooks for data fetching and mutation.

### Where to store the watch list data

- The watch list data is stored in a `watchlist.json` file located in the `/public/watchlist.json` directory.
- Utility functions have been created to `read` and `write` to the `watchlist.json` file:
  - `readWatchList` and `writeWatchList` functions are defined in `/src/utils/jsonFileReadWrite.ts`.
- These utility functions are utilized by the backend API routes:
  - `/src/app/api/watchlist/route.ts` and `/src/app/api/watchlist/[id]/route.ts` handle the execution of these functions for reading and modifying the watch list.

### Dark and Light Mode

- The website initially loads in Light mode.
- Users can switch between Light mode and Dark mode using a button located on the Navbar.
- `How to Implement`
  - A React Context API is used to manage and provide the user's preferred theme across the entire website.
  - Theme-related styles are defined in the `globals.css` file, with specific classes for Dark mode and Light mode.
  - In the `/tailwind.config.ts` file:
    - The configuration includes `darkMode: 'class'`, allowing background and foreground colors to change dynamically when switching modes.

## What will I do in future?

- Implement authentication using NextAuth for secure user access.
- Create a database to store user data.
- Migrate the watchlist from a common JSON file to a user-specific watchlist stored in the database.
- Personalize the watchlist: When users access the watchlist page, they will only see their own saved movies.

## Installation Process

- Download or clone the project

  ```bash
  git clone https://github.com/khshakilahamed/movies.git
  ```

- Install the Dependencies

  ```bash
  npm install
  // or
  yarn
  ```

- Configure .env file

  ```bash

  NEXT_PUBLIC_API_KEY= '<TMDB api key>'
  NEXT_PUBLIC_BASE_URL=http://localhost:3000
  ```

- Start the project

  ```bash
  npm run dev
  // or
  yarn dev
  ```
