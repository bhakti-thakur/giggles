import { useState } from 'react'
import './index.css'
import Loader from './components/Loader'
import Ask from './components/ask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex h-screen justify-center items-center'>
        {/* <Loader /> */}
        {/* <div className='text-8xl motion'>👋</div> */}
        <Ask />
      </div>
    </>
  )
}

export default App
