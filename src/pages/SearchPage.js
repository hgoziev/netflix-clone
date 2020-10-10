import React from "react";
import "./Apps.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import SearchPageFooter from "./SearchPageFooter";

function SearchPage() {
  return (
    <div className="apps">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <br />
      <br />
      <SearchPageFooter />
    </div>
  );
}

export default SearchPage;
