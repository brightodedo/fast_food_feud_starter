import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onclick = () => {}, onclose= () => {}}) {
  let buttonClassName = "chip"
  if(isActive) buttonClassName = "chip active"
  return (
    <button className={buttonClassName} onClick={onclick}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={event => {onclose(); event.stopPropagation()} }>{`X`}</span>
    </button>
  )
}

export default Chip