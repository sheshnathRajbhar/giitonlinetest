import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { modeSlice } from '../store/modeSlice'
import { setMode } from '../store/modeSlice'
import { Link } from 'react-router-dom'
const Header = () => {
    const mode = useSelector(state=>state.mode.mode)
    const dispatch = useDispatch()
  
  return (
    <div className='bg-blue-600 text-white mx-auto'>
    <div className="container mx-auto flex justify-between">
        <h1 className='font-bold text-xl py-2'><Link to={'/'}>GIIT Education</Link></h1>
        <button onClick={()=>dispatch(setMode(mode === "light"?"dark":"light"))} className='bg-white text-blue-600 inline-block px-3 rounded-sm'>{mode==="light"?"Dark":"Light"}</button>
    </div>
    </div>
  )
}

export default Header