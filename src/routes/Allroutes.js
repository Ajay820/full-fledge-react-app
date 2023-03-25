import {Routes,Route} from "react-router-dom"

import { MovieList,Moviedetails ,Popular,Top,Upcoming,Search} from "../pages"

import React from 'react'

export const Allroutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<MovieList />}></Route>
            <Route path="/movie/:id" element={<Moviedetails />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/top" element={<Top />}></Route>
            <Route path="/movie/upcoming" element={<Upcoming />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route></Route>
        </Routes>
    </div>
  )
}
