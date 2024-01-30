import React, { useEffect, useState } from "react"
import { useGetVideoGamesQuery, useGetVideoGameQuery } from "./api"
import { useSelector } from "react-redux"


const App = () => {

  
  const {isLoading: gamesLoading}= useGetVideoGamesQuery();
  const videoGames = useSelector(state=>state.videoGames)

  // const elements = videoGames.map(itm=>
  //   <h1>
      
  //   </h1>)

  return (
    <>
     {gamesLoading && <div>Loading video games...</div>}
     
     {videoGames.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
    </>
  )
}

export default App
