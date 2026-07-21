import React from 'react'


// Simple CardGrid component to layout cards in a responsive grid
const CardGrid = ({name, username, email, address}) => {


  return (
<div className="card-grid" style={{
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
  }}>


  <div className="card">
  
    <h3>{name}</h3>
    <p>
     {username}
    </p>
    <a>{email}</a>
  <h4>{address.street}</h4>
      <h4>{address.suite}</h4>
      <h4>{address.city}</h4>
      <h4>{address.zipcode}</h4>
      <h4>{address.geo.lat}</h4>
  </div>
</div>
  )
}



export default CardGrid
