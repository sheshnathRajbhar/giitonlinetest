import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import Questions from './Questions'



const Quiz = () => {
    const mode = useSelector(state=>state.mode.mode)
  return (
    <div className={`w-full h-screen ${mode==="light"?"bg-white text-black":"bg-black text-white"}`}>
        <Header/>
        <h2 className='text-center font-bold text-2xl my-4'>Quiz Application</h2>
        <Questions/>
    </div>
  )
}

export default Quiz