import React from "react";
import { directors } from "../data";

function Directors() {
  const makeDirectors = directors.map(director => {
    return (
      <div key={director.name}>
        <p>{ director.name }</p>
        <ul>
          {director.movies.map(movie => { return <li key={movie}>{ movie }</li> })}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    { makeDirectors }
  </div>;
}

export default Directors;
