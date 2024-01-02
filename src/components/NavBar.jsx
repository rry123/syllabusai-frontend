import React from 'react'
import Drawer from './Drawer'
import Historyicon from './Historyicon'
import { useNavigate } from 'react-router-dom'

export default function NavBar({children}) {

    const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100">
  <div className="flex-none">
    <Drawer></Drawer>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" onClick={() => navigate('/playground')}>syllabus.ai</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost" onClick={() => navigate('/history')}>
     <Historyicon/>
    </button>
  </div>
</div>
  )
}
