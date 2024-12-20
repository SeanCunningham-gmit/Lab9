import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem'; // Import MovieItem component

function Movies() {
  const [movies, setMovies] = useState([]); // State to hold movies data

  // Function to fetch movies from the backend API
  const fetchMovies = () => {
    fetch('http://localhost:4000/api/movies') // Adjust port if necessary
      .then(response => response.json())
      .then(data => setMovies(data)) // Set movies data to state
      .catch(error => console.error('Error fetching movies:', error));
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {/* Map over the array of movies */}
      {movies.map((movie) => (
        <MovieItem 
          myMovie={movie} 
          key={movie._id || "6734d893576ff8b9d5d9d62c"} // Use _id from MongoDB as key, fallback to provided ID
          Reload={fetchMovies} // Pass fetchMovies to reload the movie list after an action
        />
      ))}
    </div>
  );
}

export default Movies;
