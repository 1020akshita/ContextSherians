import React from 'react'
import Nav from './components/Nav'
import Routing from './utils/Routing'

const App = () => {
  return (
    <>
      <div className='bg-zinc-300 w-full h-auto  ' >
       <Nav/>
       <Routing/>        
      </div>
    </>
  )
}

export default App
