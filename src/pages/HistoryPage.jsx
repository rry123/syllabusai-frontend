import React from 'react'
import NavBar from '../components/NavBar'
import HistoryCard from '../components/HistoryCard'
import { useState } from 'react'


export default function HistoryPage() {
    const [history, sethistory] = useState([])

  return (
    <div className='w-full flex flex-col items-center gap-8'>
      <NavBar></NavBar>
      <div className='flex flex-col items-center w-full  lg:w-4/12   p-3'>
        <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
           History
        </h2>
        

        <div className='w-full flex flex-col items-center py-8 gap-3 sm:px-2'>

            <HistoryCard></HistoryCard>
            <HistoryCard></HistoryCard>
            <HistoryCard></HistoryCard>

        </div>
        
        
        
      
      </div>
    
        

    </div>
  )
}
