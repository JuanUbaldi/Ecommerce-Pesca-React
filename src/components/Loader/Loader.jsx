import React from 'react'
import { Metronome } from '@uiball/loaders'


function Loader({size, speed, color}) {
  return (
    <Metronome 
 size={size}
 speed={speed} 
 color={color}


/>
  )
}

export default Loader