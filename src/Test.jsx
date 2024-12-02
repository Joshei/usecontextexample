import {React, useEffect} from "react";
import {Link} from 'react-router-dom';

const Test = () => {
    return (
    <div>
        <h1>On Home Page</h1>
        <Link to="/test2">Go to Page With Context Listing</Link>
    </div>
    );
};
export default Test;