import {React, useEffect} from "react";
import {Link} from 'react-router-dom';

const Test = () => {

    useEffect(() => {

        //  LETS CONVERT THIS RETURN/RENDER TO PAGES CONTEXT AND KEEP APP AS THE LOADER

    }, []); 

    return (
    
    <div>

        

        <h1>On Home Page</h1>
        <Link to="/test2">Go to Page With Context Listing</Link>
        
        
    </div>
    );
};

export default Test;