import React from 'react'
import TestIcon from './TestIcon'
import NotesIcon from './NotesIcon'
import Historyicon from './Historyicon'
import { useNavigate } from 'react-router-dom'
import { SignOutButton, UserProfile, useUser } from '@clerk/clerk-react'
import SignOutIcon from './SignOutIcon'
import { UserButton } from '@clerk/clerk-react'
import AnalyseIcon from './AnalyseIcon'
import AnswerIcon from './AnswerIcon'


export default function Drawer({children}) {

    const navigate = useNavigate()
    const { user } = useUser()
  return (

    <div className="drawe z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {children} 
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base">
    <a className="btn btn-ghost text-xl mb-16" onClick={() => navigate('/playground')}>syllabus.ai</a>
      {/* Sidebar content here */}
      <li><a  onClick={() => navigate('/')} ><TestIcon/>Generate Test</a></li>
      <li><a onClick={() => navigate('/')}><NotesIcon/>Generate Notes</a></li>
      <li><a onClick={() => navigate('/answer')}><AnswerIcon/>Generate Answer</a></li>
      <li><a onClick={() => navigate('/analyse')}><AnalyseIcon/>Analyse Syllabus</a></li>
      <li><a onClick={() => navigate('/history')}><Historyicon/>History</a></li>
      <div className='flex flex-col mt-auto gap-3 p-4'>
      <div className='mt-auto flex flex-row gap-3 items-center btn btn-outline justify-start'><UserButton/>{user.firstName}</div>
      <a className='flex flex-row p-3 gap-2 btn btn-accent mt-auto'><SignOutIcon/><SignOutButton afterSignOutUrl="/" /></a>
      </div>
    </ul>
  </div>
</div>
  )
}
