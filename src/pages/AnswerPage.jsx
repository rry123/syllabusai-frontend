import React from 'react'

import NavBar from '../components/NavBar'
import AnsPlayground from '../components/AnsPlayground'
import Footer from '../components/Footer'





export default function AnswerPage() {
  return (

    <div className='w-full flex flex-col items-center gap-8'>
        <NavBar></NavBar>
       <AnsPlayground/>
      <Footer/>
        

    </div>
  )
}