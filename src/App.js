import React, { useRef } from "react"
import Hover from "./components/Hover"
import useHover from "./hooks/useHover"

function App() {
  const ref = useRef()
  const isBlackHovering = useHover(ref)

  return (
    <div>
      <Hover />
      <div ref={ref}
         style={{
           width: 200,
           height: 200,
           background: isBlackHovering ? 'black' : 'gray'
         }}>
      </div>
    </div>
  )
}

export default App
