import React, {useState, useEffect} from 'react'
import Character from './components/Character'
import './App.css';
import axios from 'axios';
import styled from 'styled-components'


const StyledDetails = styled.div`
background-color: lightgrey;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData ] = useState(null);
  
  useEffect(() => {
    function getData() {
      axios.get('https://swapi.dev/api/people')
        .then(res => {
          console.log(res.data.results)
          setData(res.data.results)
        })
        .catch(err => {
          console.log('UhOh, something went wrong')
        })
    }
    getData()
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data !== null && data.map(character => (
      <Character character={character} key={character.id} />
      ))}
    </div>
  );
}

export default App;
