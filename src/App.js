import { React, useContext, useState, useEffect } from 'react';
import { AppContext } from './createdContext.jsx';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Test from './Test.jsx';
import Test2 from './Test2.jsx';

    
// export default ChildComponent;
    const StarWarsCharacters = () => {
    
        <Link to="/test2">Go to Context Page</Link>
        
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

  

