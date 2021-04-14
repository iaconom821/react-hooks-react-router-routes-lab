import React from "react";
import { actors } from "../data";

function Actors() {
  const makeActor = actors.map(actor => {
    return (
      <div key={actor.name}>
        <p>{ actor.name }</p>
        <ul>
          { actor.movies.map(movie=>{ return <li key={ movie }>{ movie }</li> })}
        </ul>
      </div>
      
    )
  })
  return <div>
    <h1>Actors Page</h1>
    { makeActor }
  </div>;
}

export default Actors;
