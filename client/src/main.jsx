import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'


// Import components
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'

import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>
  },
  {
    path: '/quiz',
    element:<Quiz></Quiz>
  },
  {
    path: '/result',
    element:<Result></Result>
  },
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
  </RouterProvider>
  </Provider>,
)
