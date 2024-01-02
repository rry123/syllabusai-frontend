import React from 'react'
import TestIcon from './TestIcon'
import NotesIcon from './NotesIcon'
import Historyicon from './Historyicon'
import { useNavigate } from 'react-router-dom'

export default function Drawer({children}) {

    const navigate = useNavigate()
  return (

    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {children} 
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base pt-28">
      {/* Sidebar content here */}
      <li><a ><TestIcon/>Generate Test</a></li>
      <li><a><NotesIcon/>Generate Notes</a></li>
      <li><a onClick={() => navigate('/history')}><Historyicon/>History</a></li>
      
    </ul>
  </div>
</div>
  )
}
