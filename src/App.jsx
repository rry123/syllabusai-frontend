import React from 'react'
import Playground from './components/Playground'
import HomePage from './pages/homePage'
import HistoryPage from './pages/HistoryPage'

export default function App() {
  return (
    <div  className='w-screen flex flex-col items-center justify-center'>
      {/* <HomePage></HomePage> */}
      <HistoryPage/>
    </div>
  )
}
