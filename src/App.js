import { React, useContext, useState, useEffect } from 'react';
import { AppContext } from './createdContext.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';
import Test2 from './Test2.jsx';

    
// export default ChildComponent;
    const StarWarsCharacters = () => {
    const { state, setState} = useContext(AppContext);
    // Step 1: Set up state to store the fetched data
    const [characters, setCharacters] = useState([]);
  
  // Step 2: Fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the Star Wars API
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results); // Store the list of characters in state
      })
      .catch(error => {
        
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts
  


  //Add a listing page
 
  
  return (
    <div>





        
      <h1>Star Wars Characters</h1>
      {/* Step 3: Map over the characters array and render the data */}
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <h3>{character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Gender: {character.gender}</p>
          </li>
        ))}
      </ul>
      
      <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Test/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/test2" element={<Test2/>} />
           
        </Routes>
    </BrowserRouter>

        <div>
      
      </div>


    </div>




);

};




export default StarWarsCharacters;

  

