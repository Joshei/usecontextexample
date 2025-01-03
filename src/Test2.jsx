import { React, useContext, useState, useEffect } from 'react';
import { AppContext } from './createdContext.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';

  const Test2 = () => {
  const { state, setState} = useContext(AppContext);
      return (
        <div>
        <h1>Star Wars Characters - CONTEXT PAGE</h1>
          <ul>
            {state.map((character, index) => (
              <li key={index}>
                <h3>{character.name}</h3>
                <p>Height: {character.height}</p>
                <p>Mass: {character.mass}</p>
                <p>Gender: {character.gender}</p>
              </li>
            ))}
          </ul>
      <Link to="/">Go to Home Page</Link>
      </div>
    );
};
export default Test2;