// import React from "react";
// import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";

// const Movies = () => {
//   const { movie } = useGlobalContext;
//   return (
//     <section className="movie-page">
//       <div className="grid grid-4-col">
//         {movie.map((curMovie) => {
//           const { imdbID, Title, Poster } = curMovie;
//           return (
//             <NavLink to={`movie/${imdbID}`}>
//               <div className="card">
//                 <div className="card-info">
//                   <h2>{Title}</h2>
//                   <img src={Poster} alt={imdbID}></img>
//                 </div>
//               </div>
//             </NavLink>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Movies;
// mammamam
import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movie } = useGlobalContext();

  // if (isLoading) {
  //   return (
  //     <div className="">
  //       <div className="loading">Loading...</div>
  //     </div>
  //   );
  // }
  return (
    <section className="movie-page">
      <div className=" container grid grid-4-col">
        {Array.isArray(movie) && movie.length > 0 ? (
          movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 15 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={imdbID}></img>
                  </div>
                </div>
              </NavLink>
            );
          })
        ) : (
          <p>No movies available</p> // Handle case with no movies
        )}
      </div>
    </section>
  );
};

export default Movies;
