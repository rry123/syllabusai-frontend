import React from 'react'

import NavBar from '../components/NavBar'
import AnsPlayground from '../components/AnsPlayground'
import AnalysePlayground from '../components/AnalysePlayground'





export default function AnalysePage() {
  return (

    <div className='w-full flex flex-col items-center gap-8'>
        <NavBar></NavBar>
      <AnalysePlayground/>
    
        

    </div>
  )
}