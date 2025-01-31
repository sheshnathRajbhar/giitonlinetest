import React from 'react'
import Header from './Header'
import Card from './Card'
import { useSelector } from 'react-redux'
import { modeSlice } from '../store/modeSlice'


const Home = () => {
const mode = useSelector(state=>state.mode.mode)






    const courses = [
        {
            name:"Course on computer concept",
            noOfQuestion:50,
            duration:30
        },
        {
            name:"Web Designing And Publishing",
            noOfQuestion:50,
            duration:50
        },
        {
            name:"Problame Solving python",
            noOfQuestion:50,
            duration:45
        },
        {
            name:"Internate of Things",
            noOfQuestion:50,
            duration:35
        },
    ]


  return (
   <div className={`w-full h-screen ${mode==="light"?'bg-white text-black':'bg-black'}`}>
    <Header/>

    {/* Courses goes here */}
    <div className=" container grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 mx-auto my-4">
        {courses.map((course)=>(
        <Card key={course.name} course={course}/>
        ))}
    </div>
   </div>
  )
}

export default Home


