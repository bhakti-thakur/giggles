import React from 'react'
import kitty from '../assets/kitty.png'

function Loader() {
  return (
    <div>
        <img src={kitty} className=' flex justify-center align-center items-center ' />
    </div>
  )
}

export default Loader