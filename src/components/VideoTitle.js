import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video px-6 pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4 '>{overview}</p>
        <div className='my-2 md:m-0'>
            <button className='bg-white text-black py-1 px-3 md:p-4 md:px-12 text-xl hover:bg-opacity-80 rounded-lg'>▶ Play</button>
            <button className='hidden md:inline-block bg-white text-black m-2 p-4 px-12 text-xl bg-opacity-50 hover:bg-opacity-35 rounded-lg'>ⓘ More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle