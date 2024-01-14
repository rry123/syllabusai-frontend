import React from 'react'
import NavBar from '../components/NavBar'
import { SignInButton, SignUpButton } from '@clerk/clerk-react'
import BrowserMock from '../components/BrowserMock'
import LandingNav from '../components/LandingNav'
import workingVideo from '../assets/working.gif'
import Footer from '../components/Footer'
import '../App.css'

import Features from '../components/Features'
SignUpButton

export default function LandingPage() {
  return (
    <div className='flex flex-col screen bg-base-100'>
    <LandingNav></LandingNav>
    <div className="hero ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold"> <span className='block text-accent'>All-in-one </span>tool for exam prep</h1>
      <p className="py-6">Empower your study sessions with our AI-driven platform! Effortlessly generate tests, organize notes, and elevate your learning experience to ace every subject.</p>
     
     <div className='flex flex-row gap-5 justify-center'>
      <button className="btn btn-accent"><SignUpButton/></button>
      <button className="btn btn-accent">About us</button>
      </div>
    </div>
  </div>
</div>
<div className='flex justify-center'>

    <img src={workingVideo} className='rounded-md shadow-md shadow-neutral'></img>
</div>
  <Features></Features>


    <Footer></Footer>

    </div>
  )
}

