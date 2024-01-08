import React from 'react'

export default function LoadingBar() {
  return (
    <div className='flex flex-col items-start gap-3 justify-center w-full'>

        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>

    </div>
  )
}
