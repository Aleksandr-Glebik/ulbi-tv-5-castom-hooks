import React, { useRef } from "react"
import useHover from "../hooks/useHover"

const Hover = () => {
  const ref = useRef()
  const isHovering = useHover(ref)

  console.log('isHovering', isHovering);

  return (
    <div ref={ref}
         style={{
           width: 200,
           height: 200,
           background: isHovering ? 'blue' : 'red'
         }}>
    </div>
  )
}

export default Hover
