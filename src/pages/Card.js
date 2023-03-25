import React from 'react'

import {Link,useNavigate} from "react-router-dom"


export const Card = ({movie}) => {

    const navigate = useNavigate()

    function handle(id){
        navigate(`/movie/${id}`)
    }

    const image = (`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`)

    console.log(movie)


  return (
        <div className="w-[350px] bg-white border border-gray-200 m-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Link to={"#"}> 
                <img className="" src={image} alt="" />
            </Link>
            <div className="p-2">
                <Link to={"#"}>
                    <h5 className="m-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                </Link>
                <Link>
                    <p className="m-2">{movie.overview}</p>
                </Link>
                <button onClick={()=>{handle(movie.id)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 m-2  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>
            </div>
        </div>
  )
}
