import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import {SearchCard} from "./SearchCard"



export const Search = () => {

  const [searchParams] = useSearchParams()

  const movie =searchParams.get("q")

  const [data,setData] =useState([])

  useEffect(()=>{
    async function search(){
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c0560cd9683ba86656c5b34fdb80aba&query=${movie}`)

      const data = await response.json()

      setData(data.results)
    } search()
  },[movie])

  return (
    <main>
      <section className='w-4/5 mx-auto'>
        <h1 class="text-white dark:text-white m-5 text-2xl">Search result for "{movie}"</h1>
        <div className='flex justify-start flex-wrap'>
          {data.map((data)=>(
            <SearchCard key={data.id} data={data}/>
          ))}
        </div>
      </section>
    </main>
  )
}
