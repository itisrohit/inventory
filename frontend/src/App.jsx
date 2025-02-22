import './App.css'
import Form from './components/Form'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Showdata from './components/Showdata'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form/>
  },
  {
    path: '/show',
    element: <Showdata/>
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
