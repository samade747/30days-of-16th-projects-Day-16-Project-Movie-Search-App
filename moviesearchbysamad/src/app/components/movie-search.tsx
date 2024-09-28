 "use client"; // Enables client-side rendering for this component in Next.js

 // Import necessary hooks and components from React and custom components

 import { useState, ChangeEvent } from "react"; // Import useState for state management and ChangeEvent for handling input changes
import { Input } from "@/app/components/ui/input"; // Import a custom Input component
import { Button } from "@/app/components/ui/button"; // Import a custom Button component
import { CalendarIcon, StarIcon } from "lucide-react"; // Import icons (Calendar, Star) from lucide-react library
import Image from "next/image"; // Import Next.js Image component for optimized image loading
import ClipLoader from "react-spinners/ClipLoader"; // Import a loading spinner from the react-spinners library


// Define the structure of movie details using TypeScript's type system

type MovieDetails = {
    Title: string;
  Year: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Genre: string;
  Director: string;
  Actors: string;
  Runtime: string;
  Released: string;
  };

  // Define the functional component `MovieSearch`

  export default function MovieSearch() {
    const [searchTerm, setSearchTerm] = useState<string>(""); // State variable to store the search term
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null); // Default value is an empty string
    const [loading, setLoading] = useState<boolean>(false); // Default is false (not loading)
    const [error, setError] = useState<string | null>(null);  // Default is null (no error)

     // Function to handle the search action when the user clicks the search button

     const handleSearch = async (): Promise<void> => {
        setLoading(true) // Set loading to true
        setError(null) // Set error to null
        setMovieDetails(null) // Set movie details to null

        try {
            const respone = await fetch(
                `http://www.omdbapi.com/?t=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
            );
            if(!respone.ok){
                throw new Error(respone.statusText)
            }
            const data = await respone.json();
            if (data.Resonse === "False") {
                throw new Error(data.Error);
        }
        setMovieDetails(data); // Set movie details
        } catch (error) {
            setError((error as Error).message); // Set error
        } finally {
            setLoading(false) // Set loading to false
        }

     }


     const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(event.target.value); // Update the search term
      };

    return(

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-1 text-center">Movie Search</h1>
                <p className="mb-6 text-center">Search for movies</p>

                <div className="flex items-center space-mb-6">
                <Input 
                type='text'
                placeholder= 'Enter movie name'
                value={searchTerm}
                onChange={handleInputChange}
                className="flex-1 mr-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"                
                />
                <Button
                onClick={handleSearch}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600"
                >
                Search

                </Button>
                </div>

                {/* Loading spinner */}
        {loading && (
          <div className="flex justify-center items-center">
            <ClipLoader className="w-6 h-6 text-blue-500" />
          </div>
        )}
        {/* Error message */}
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}. Please try searching for another movie.
          </div>
        )}
        {/* Movie details */}
        {movieDetails && (
          <div className="flex flex-col items-center">
            <div className="w-full mb-4">
              {/* Movie poster image */}
              <Image
                src={
                  movieDetails.Poster !== "N/A"
                    ? movieDetails.Poster
                    : "/placeholder.svg"
                }
                alt={movieDetails.Title}
                width={200}
                height={300}
                className="rounded-md shadow-md mx-auto"
              />
            </div>
            <div className="w-full text-center">
              <h2 className="text-2xl font-bold mb-2">{movieDetails.Title}</h2>
              <p className="text-gray-600 mb-4 italic">{movieDetails.Plot}</p>
              {/* Movie details section */}
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span className="mr-4">{movieDetails.Year}</span>
                <StarIcon className="w-4 h-4 mr-1 fill-yellow-500" />
                <span>{movieDetails.imdbRating}</span>
              </div>
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <span className="mr-4">
                  <strong>Genre:</strong> {movieDetails.Genre}
                </span>
              </div>
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <span className="mr-4">
                  <strong>Director:</strong> {movieDetails.Director}
                </span>
              </div>
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <span className="mr-4">
                  <strong>Actors:</strong> {movieDetails.Actors}
                </span>
              </div>
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <span className="mr-4">
                  <strong>Runtime:</strong> {movieDetails.Runtime}
                </span>
              </div>
              <div className="flex justify-center items-center text-gray-500 mb-2">
                <span className="mr-4">
                  <strong>Released:</strong> {movieDetails.Released}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
