import React from 'react'
import browserImg from '../assets/browermock.png'

export default function BrowserMock() {
  return (
    <div className="mockup-browser border bg-base-300 mt-10 w-full">
  <div className="mockup-browser-toolbar">
    <div className="input">syllabus.ai</div>
  </div>
    <img src={browserImg} alt="mockup" />
</div>
  )
}

