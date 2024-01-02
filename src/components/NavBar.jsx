import React from 'react'
import Drawer from './Drawer'
import Historyicon from './Historyicon'

export default function NavBar({children}) {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-none">
    <Drawer></Drawer>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">syllabus.ai</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
     <Historyicon/>
    </button>
  </div>
</div>
  )
}
