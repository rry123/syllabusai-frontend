import React from 'react'

export default function LoadingBar() {
  return (
    <div className='flex flex-row items-center justify-center w-full'>
        <span className="loading loading-dots loading-lg mr-3"></span>
        <span>Loading</span>
    </div>
  )
}
