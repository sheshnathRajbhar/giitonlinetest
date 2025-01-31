import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
const Result = () => {
  let mode = useSelector(state=>state.mode.mode)
  let result = useSelector(state=>state.result)
  let questions = useSelector(state=>state.questions.questions)
  return (
    
      <div className={`w-full h-screen ${mode==="light"?"bg-white text-black":"bg-black text-white"}`}>
        <Header/>
        <h2 className='text-center font-bold text-2xl my-4'>Quiz Application</h2>
        <div className="result">
          <div className='w-full sm:w-md mx-auto p-4 shadow-md shadow-gray-500 rounded-md bg-white text-black'>
          <h2 className='text-gray-600 font-bold text-xl text-center'>Result</h2>
              <p className='flex justify-between my-3'><span>Username</span> <span className='font-bold'>Sandeep</span></p>
              <p className='flex justify-between my-3'><span>Total Question </span> <span className='font-bold'>{questions.length}</span></p>
              <p className='flex justify-between my-3'><span>Right Answer</span> <span className='font-bold'>{result.right.length}</span></p>
              <p className='flex justify-between my-3'><span>Wrong Answer</span> <span className='font-bold'>{result.wrong.length}</span></p>
              <p className='flex justify-between my-3'><span>Attemped</span> <span className='font-bold'>{result.attemped.length}</span></p>
              <p className='flex justify-between my-3'><span>Result</span> <span className='font-bold'>{result.right.length>questions.length/2?"Pass":"Fail"}</span></p>
          </div>
        </div>
      </div>
    
  )
}

export default Result