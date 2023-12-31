import React from 'react'
import Navbar from './components/Navbar'
import FrontContainer from './components/FrontContainer'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Watch from './components/Watch'


const App = () => {
  return (
    <div className='bg-slate-800 font-gilroy'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<FrontContainer/>,
        },
        {
          path:'/watch',
          element:<Watch/>
        }
      ]
    }
  ]
)



export default App