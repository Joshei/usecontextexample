import { React, useContext, useState, useEffect } from 'react';
import { AppContext } from './createdContext.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';




    const Test2 = () => {
        const { state, setState} = useContext(AppContext);
        // Step 1: Set up state to store the fetched data
        const [characters, setCharacters] = useState([]);
      

         useEffect(() => {

         }, []);

     
      
      return (
        <div>
    
    
    
    
    
            
          <h1>Star Wars Characters - CONTEXT PAGE</h1>
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
          





    
    
    <div>
        
       
        <Link to="/">Go to Home Page</Link>
        
    </div>


</div>


    );
};

export default Test2;