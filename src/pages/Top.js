import React from 'react'

import { Topcard } from './Topcard'

import {useState,useEffect} from "react"



export const Top = () => {

    const [top,setTop]= useState([])

    useEffect(()=>{
        async function top(){
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9c0560cd9683ba86656c5b34fdb80aba&language=en-US")

            const data =await  response.json()

            setTop(data.results)
        }top()
    })
  return (
    <main>
        <section className='w-4/5 mx-auto'>
            <div className="flex flex-wrap justify-start p-2">
                {top.map((top)=>(
                    <Topcard key={top.id} top={top} />
                ))}
            </div>
        </section>
    </main>
  )
}
