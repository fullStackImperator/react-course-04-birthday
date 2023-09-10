import React from 'react'

const Person = ({ id, image, name, age }) => {
  return (
    <div className="person" key={id}>
      <img src={image} alt="" className="img" style={{ maxWidth: '100px' }} />
      <h4>{name}</h4>
      <p>{age} years</p>
    </div>
  )
}
export default Person
