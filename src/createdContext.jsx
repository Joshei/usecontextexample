import React, { createContext, useState } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
const AppProvider = ({ children }) => {
    const [state, setState] = useState([{
        user: null, // Example state
        theme: 'light',
    }]);

    // Optional: Add utility functions
    const toggleTheme = () => {
        setState((prevState) => ({
            ...prevState,
            theme: prevState.theme === 'light' ? 'dark' : 'light',
        }));
    };

    return (
        <AppContext.Provider value={{ state, setState, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
