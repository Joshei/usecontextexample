import { React, useContext, useState, useEffect } from 'react';
import { AppContext } from './createdContext.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';
import Test2 from './Test2.jsx';

    const StarWarsCharacters = () => {
    const { state, setState} = useContext(AppContext);
    const [loading, setLoading] = useState(true); // To track loading status



  //   useEffect(() => {
  //  // Fetch data from the Star Wars API
  //   fetch("https://swapi.dev/api/people/")
  //     .then(response => response.json())
  //     .then(data => {
  //       setState(data.results); // Store the list of characters in state
  //     })
  //     .catch(error => {
        
  //       console.error('Error fetching data:', error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     })
  //     ;
  // }, []); // Empty dependency array to fetch data only once when the component mounts

  /////

  useEffect(() => {

  fetch('https://catfact.ninja/fact')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('People data:', data);
        setState(data.results)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

  }, []);


  /////



  if (loading) return <p>Loading...</p>;
  return (
         <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Test/>} />
            <Route path="/test2" element={<Test2/>} />
        </Routes>
        </BrowserRouter>
        </div>
);
};
export default StarWarsCharacters;

  

