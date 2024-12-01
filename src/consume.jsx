 import React, { useContext } from 'react';
 import { AppContext } from './context/AppContext';

// const ChildComponent = () => {
//     const { state, toggleTheme } = useContext(AppContext);

//     return (
//         <div>
//             <p>Current Theme: {state.theme}</p>
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         </div>
//     );
// };

// export default ChildComponent;

import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]); // To store the fetched data
  const [loading, setLoading] = useState(true); // To track loading status
  const [error, setError] = useState(null); // To track any errors
  const { state, toggleTheme } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch("https://swapi.dev/");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Save data to state
      } catch (error) {
        setError(error.message); // Save error to state
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchData(); // Call the function
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


