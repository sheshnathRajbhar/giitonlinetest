import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useFetchData } from '../hooks/FetchData'
import {setRight, setWrong, setAttemped} from "../store/resultSlice"
import { Link } from 'react-router-dom'

const Questions =  () => {

  const [correct, setCorrect] = useState(null)
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions.questions)
  const [trace, setTrace] = useState(0)
  const question = questions[trace]
  const [lock, setLock] = useState(false)
  const result = useSelector(state=>state.result)

  useFetchData()

  // Set correct answer whenever the question changes
  useEffect(() => {
    if (question) {
      setCorrect(question.answer)
      console.log(result)
      
    }
  }, [question])
  

  // This effect runs only when `question` changes

  function prevQuestion() {
    if(trace>0){
      setTrace(prev=>prev-1)

    }
  }
  function nextQuestion() {
    if(questions.length-1>trace){
      setLock(false)
      options.forEach((option)=>{
        option.current.classList.remove('bg-green-200')
        option.current.classList.remove('bg-red-200')
        option.disabled = true
      })
      setTrace(prev => prev + 1)
    }
  }

  let option1 = useRef(null)
  let option2 = useRef(null)
  let option3 = useRef(null)
  let option4 = useRef(null)

  // Button array
 

  const options = [option1,option2,option3,option4];

  function checkAnswer(e) {
    const selected = e.target.value
   
    setLock(true)


    if (selected == correct) {
      e.target.classList.add("bg-green-200")
      dispatch(setRight(question.id))
    } else {
      e.target.classList.add("bg-red-200")
     
      console.log(e.target)
      dispatch(setWrong(question.id))
      options[correct-1].current.classList.add('bg-green-200')
      
    }
    dispatch(setAttemped(question.id))
  }


  return (
    <>
    
    {
questions.length>0?
<div className='w-full sm:w-md mx-auto p-4 shadow-md shadow-gray-500 rounded-md bg-white text-black'>
<h2 className='text-xl font-bold my-2'>{question.id} . {question.question}</h2>
<button disabled={lock?true:false} ref={option1} onClick={(e)=>checkAnswer(e)} value="1" className='w-full border-gray-300 border-1 border py-1 px-3 rounded text-left my-2'>{question.option1}</button>
<button disabled={lock?true:false} ref={option2} onClick={(e)=>checkAnswer(e)} value="2" className='w-full border-gray-300 border-1 border py-1 px-3 rounded text-left my-2'>{question.option2}</button>
<button disabled={lock?true:false} ref={option3} onClick={(e)=>checkAnswer(e)} value="3" className='w-full border-gray-300 border-1 border py-1 px-3 rounded text-left my-2'>{question.option3}</button>
<button disabled={lock?true:false} ref={option4} onClick={(e)=>checkAnswer(e)} value="4" className='w-full border-gray-300 border-1 border py-1 px-3 rounded text-left my-2'>{question.option4}</button>
<div className="action-btn w-full flex justify-between">
  <button onClick={prevQuestion} className='sm:w-[150px] w-[70px] py-1 sm:py-2 text-center bg-blue-600 rounded text-white'>PREV</button>
   {trace == questions.length-1?
   <button  className='sm:w-[150px] w-[70px] py-1 sm:py-2 text-center bg-blue-600 rounded text-white'><Link to={'/result'}>Submit</Link></button>
   :
   <button onClick={nextQuestion} className='sm:w-[150px] w-[70px] py-1 sm:py-2 text-center bg-blue-600 rounded text-white'>NEXT</button>
  }
</div>
</div>:<div>Data Loading ....</div>

    }
    </>
  )
}

export default Questions