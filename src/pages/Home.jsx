import React from 'react'
import Playground from '../components/Playground'
import NavBar from '../components/NavBar'
import Drawer from '../components/Drawer'




export default function HomePage() {
  return (

    <div className='w-full flex flex-col items-center gap-8'>
        <NavBar></NavBar>
        <Playground></Playground>
    
        

    </div>
  )
}
