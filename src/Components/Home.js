import React, { useState } from "react";
import Addmovie from "./AddMovie";
import "../App.css";
import { Data } from "./Data";
import Moviedisplay from "./MovieDisplay";
import Serchbar from "./Serchbar";

function Home() {
  const [moviesList, setMovieslist] = useState(Data);
  const [serchWord, setSerchWord] = useState("");
  const [ratingSerch, setratingSerch] = useState(0);
  const addmovie = (newMovie) => setMovieslist([...moviesList , newMovie]);
  const handleserch = (Event) => {
    setSerchWord(Event.target.value);
  };

  return (
    <div className="Home-container-fluid">
      <Serchbar  Find={handleserch} ratingSerch={ratingSerch} setRatingSerch={setratingSerch} />
      <Moviedisplay
        Cards={
          serchWord
            ? moviesList.filter((e) =>
                e.title
                  .toLocaleLowerCase()
                  .includes(serchWord.toLocaleLowerCase())
              )
            : ratingSerch ? moviesList.filter (e => e.rate == ratingSerch) :
            moviesList       
        }
      />
      <Addmovie add = {addmovie}/>
    </div>
  );
}

export default Home;