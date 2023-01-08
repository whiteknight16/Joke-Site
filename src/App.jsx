import React from "react";
import Joke from "./Joke";
import JokeData from "./JokeData";
export default function App(){
  const jokeElemnts=JokeData.map(joke=>{
    return(<Joke setup={joke.setup} punchline={joke.punchline}></Joke>)
  })
  return (
    <div>
      {jokeElemnts}
    </div>
  )
}