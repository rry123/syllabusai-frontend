import React from 'react'
import NavBar from '../components/NavBar'
import { SignInButton } from '@clerk/clerk-react'
import BrowserMock from '../components/BrowserMock'

export default function LandingPage() {
  return (
    <>
 <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 lg:py-24 my-auto">
  <div className="flex w-full mx-auto text-left">
    <div className="relative inline-flex items-center mx-auto align-middle">
      <div className="text-center">
        <h1 className=" text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl">
          <span className='text-accent'>All-In-One-tool</span> <br className="hidden lg:block" />
            for exam preprations
        </h1>
        <p className=" mx-auto mt-8 text-base leading-relaxed text-gray-500">Empower your study sessions with our AI-driven platform! Effortlessly generate tests, organize notes, and elevate your learning experience to ace every subject.</p>
        <div className="flex justify-center w-full gap-2 mx-auto mt-6">
          <div className="mt-3 rounded-lg sm:mt-0">
            <SignInButton  className='btn btn-accent' />
          </div>
          <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button className="btn btn-outline">See features</button>
          </div>
        </div>
        <BrowserMock></BrowserMock>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

