import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const[ isOn, setIsOn] = useState(false)
  return (
    <div>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON": "OFF"}</button>
      
    </div>
  )
}

export default Toggle
