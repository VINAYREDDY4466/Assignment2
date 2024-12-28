import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (article) => {
        setFavourites([...favourites, article]);
    };

    return (
        <AuthContext.Provider value={{ favourites, addToFavourites }}>
            {children}
        </AuthContext.Provider>
    );
};
