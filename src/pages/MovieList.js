import {useState,useEffect} from "react"

import { Card } from "./Card"

export const MovieList = () => {

  const [movie,setMovie] = useState([])

  useEffect(()=>{
    async function fetchMovie(){

      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9c0560cd9683ba86656c5b34fdb80aba&language=en-US")

      const data = await response.json()

      setMovie(data.results)
    }
    fetchMovie()
  },[])


  return (
      <main className="w-4/5 mx-auto">
          <section >
      <div className="flex justify-start flex-wrap">
        {movie.map((movie)=>(
          <Card  key={movie.id} movie={movie}/>
        ))}
      </div>  
    </section> 
      </main>
  )
}
