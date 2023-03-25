import React from 'react'
import { Allroutes } from './routes/Allroutes'

import { Header } from './components'

export const App = () => {
  return (
    <div className="dark:bg-slate-800">
        <Header />
        <Allroutes />
    </div>
  )
}
