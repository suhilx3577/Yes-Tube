import React from 'react'
import Navbar from './components/Navbar'
import FixedBar from './components/FixedBar'
import MainContainer from './components/MainContainer'
const App = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-row'>
            <FixedBar/>
            <MainContainer/>
        </div>
    </div>
  )
}

export default App