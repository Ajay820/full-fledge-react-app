import { useEffect,useState } from "react"

import { Popularcard } from "./Popularcard"


export const Popular = () => {

  const [popular,setPopular] = useState([])

  useEffect(()=>{

    async function popular(){
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9c0560cd9683ba86656c5b34fdb80aba&language=en-US")

      const data = await response.json()

      setPopular(data.results)
    }
    popular()
  },[])

  return (
    <main>
      <section className="w-4/5 mx-auto">
        <div className="flex justify-start flex-wrap">
          {popular.map((popular)=>(
            <Popularcard key={popular.id} popular={popular} />
          ))}
        </div>
      </section>
    </main>
  )
}
