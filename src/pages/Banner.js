import React from "react";
import { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
function Banner(fetchUrl) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      ); // eslint-disable-next-line
      return request;
    } // eslint-disable-next-line

    fetchdata();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_overview">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fade" />
    </header>
  );
}

export default Banner;
