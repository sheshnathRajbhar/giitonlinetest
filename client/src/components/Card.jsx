import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({course}) => {
  return (
    <div className='bg-white shadow-lg rounded-md p-4'>
        <h2 className='font-bold text-blue-600 text-xl'>{course.name}</h2>
        <p className='text-sm font-sans font-bold my-3'>Total Question {course.noOfQuestion} mcq</p>
        <p className='text-sm font-sans font-bold my-3'>Duration {course.duration} minut</p>
        <button className='bg-blue-600 py-2 px-3 text-white rounded shadow-sm'><Link to={'/quiz'}>Start Test</Link></button>
    </div>
  )
}

export default Card