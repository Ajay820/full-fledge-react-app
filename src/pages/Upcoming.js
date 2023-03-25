import React from 'react'

import {Upcomingcard} from "./Upcomingcard"

import { useState,useEffect } from 'react'

export const Upcoming = () => {
    const [upcoming,setUpcoming] = useState([])

    useEffect(()=>{
        async function upcoming(){
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=9c0560cd9683ba86656c5b34fdb80aba&language=eng-US")

            const data =  await response.json()
            setUpcoming(data.results)
        }
        upcoming()
    },[])
 
  return (
    <main>
        <section className="w-4/5 mx-auto">
        <div className="flex justify-start flex-wrap">
            {upcoming.map((upcoming)=>(
                <Upcomingcard key={upcoming.id} upcoming={upcoming} />
            ))}
        </div>
        </section>
    </main>
  )
}
