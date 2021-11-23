import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [number, setNumber] = useState(0)
  let [people, setPeople] = useState();

  useEffect(() => {
    const loadPeople = async () => {
      let res = await fetch('http://localhost:3001/api/people')
      setPeople(await res.json())
    }
    
    loadPeople();
  }, [])

  return (
    <div className="App">
      Hello World
      <button onClick={(() => setNumber(number + 1))}> Click me!</button>
      <h4> Ive been clicked {number} times</h4>
      {people ? ( //conditional
	        people.map(person => 
	          <p> {person.first_name} {person.last_name} </p>
					)
	      )
        : (
          <p> Loading ...</p>
        )
      }
    </div>
  );
}

export default App;