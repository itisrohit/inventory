import './App.css'
import Form from './components/Form'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Showdata from './components/Showdata'
import Nav from './components/Nav'

const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
    <Nav/>
    <Form/>
    </>
  },
  {
    path: '/show',
    element: 
    <>
    <Nav/>
    <Showdata/>
    </>
  },
])

function App() {
 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
