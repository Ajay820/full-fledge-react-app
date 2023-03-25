import { useState,useEffect } from "react"

import { useParams } from "react-router-dom"



export const Moviedetails = () => {

  const [list,setList] =useState([])

  const image = (`https://image.tmdb.org/t/p/w500/${list.poster_path}`)

  const params = useParams()

  const movie_id = params.id

  useEffect(()=>{
    async function fetchSingle(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9c0560cd9683ba86656c5b34fdb80aba&language=en-US`)

      const data = await response.json()

      setList(data)
    console.log(data)

    }
    fetchSingle()
},[movie_id]
)

  return ( 
    <section>
      <main className="flex justify-center flex-wrap py-5">
        <div className="w-1/5">
          <img className="rounded" src={image} alt="" />
        </div>
        <div className="w-2/5 ml-7 py-7">
          <h1 className="text-3xl text-dark dark:text-white">{list.title}</h1>
          <h5 className="text-dark dark:text-white">{list.overview}</h5>
          <h5 className="text-dark dark:text-white">Budget: <span className="text-blue:600">{list.budget}</span></h5>
          <h5 className="text-dark dark:text-white">Popularity: <span className="text-blue:600">{list.popularity}</span></h5>
        </div>
      </main>
    </section>
  )
}
