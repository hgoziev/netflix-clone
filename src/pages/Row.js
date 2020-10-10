import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Row.css";
import YoutTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return requests;
    }
    fetchdata();
  }, []);
  console.log(movies);

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const [trailerUrl, setTrailerUrl] = useState("");
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posts">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row-poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      {trailerUrl && <YoutTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
