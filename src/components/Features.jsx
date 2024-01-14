import React from 'react'
import ftGenNotes from '../assets/gen-notes.png'
import ftGenTest from '../assets/gen-test.png'
import ftGenAns from '../assets/gen-ans.png'

export default function Features() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto w-full">
    <div className="flex flex-col">
      <div className="h-1 rounded overflow-hidden">
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center w-full">
        <h1 className="sm:w-2/5 text-neutral-content font-medium title-font text-2xl mb-2 sm:mb-0">AI Features to supercharge your studies</h1>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden shadow-xl shadow-neutral">
          <img alt="content" className="object-cover object-center h-full w-full" src={ftGenNotes} />
        </div>
        <h2 className="text-xl font-medium title-font text-accent mt-5">Generate notes</h2>
        <p className="text-base  text-neutral-content leading-relaxed mt-2">Transform lectures into organized notes effortlessly. Let AI simplify your study materials, so you can focus on understanding.</p>
      
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden shadow-xl shadow-neutral ">
          <img alt="content" className="object-cover object-center h-full w-full " src={ftGenTest} />
        </div>
        <h2 className="text-xl font-medium title-font text-accent mt-5">Generate Tests</h2>
        <p className="text-base text-neutral-content leading-relaxed mt-2">Generate personalized exam test questions with a click. Test your knowledge,  and conquer exams confidently.</p>
      
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden shadow-xl shadow-neutral">
          <img alt="content" className="object-cover object-center h-full w-full" src={ftGenAns } />
        </div>
        <h2 className="text-xl font-medium title-font text-accent mt-5">Generate Answers</h2>
        <p className="text-base text-neutral-content leading-relaxed mt-2">Get instant, AI-generated answers to understand concepts better. Bridge gaps in your understanding effortlessly.</p>
      </div>
    </div>
  </div>
</section>

  )
}
