import React, { createContext, useState } from 'react';

// const AppContext = createContext();
// // Provider Component
// const AppProvider = ({ children }) => {
//     const [state, setState] = useState([{
//         user: null, // Example state
//         theme: 'light',
//     }]);
//     return (
//         <AppContext.Provider value={{ state, setState }}>
//             {children}
//         </AppContext.Provider>
//     );
// };
// export { AppContext, AppProvider };


// Create Context
const AppContext = createContext();
// Provider Component
const AppProvider = ({ children }) => {
    const [state, setState] = useState([{
        fact: '', // Example state
        //theme: 'light',
    }]);
    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
export { AppContext, AppProvider };
