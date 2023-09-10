import { useState } from 'react'
import { data } from './data.js'
import Person from './Person.jsx'

const List = () => {
  const [people, setPeople] = useState(data)

  const clearAllItems = () => {
    setPeople([])
  }
  //   console.log(people)

  return (
    <div>
      <h2>{people.length} Birthdays Today</h2>
      {people.map((person) => {
        return (
          <Person
            id={person.id}
            image={person.image}
            name={person.name}
            age={person.age}
          />
        )
      })}

      <button type="button" className="btn btn-block" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  )
}
export default List
