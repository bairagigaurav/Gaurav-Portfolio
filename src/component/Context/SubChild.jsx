import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const SubChild = () => {
  const { color, handleClick } = useContext(UserContext)
  return (
    <div>
      <h4>SubChild Comp</h4>
      <p>{color}</p>
      <button onClick={handleClick} >Change Color</button>
    </div>
  )
}

export default SubChild

