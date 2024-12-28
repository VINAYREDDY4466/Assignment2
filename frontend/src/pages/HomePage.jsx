import React, { useState } from 'react';
import Articles from '../components/Articles';

const HomePage = ({ onAddToFavourites }) => {
    return (
        <div>
            <Articles onAddToFavourites={onAddToFavourites} />
        </div>
    );
};

export default HomePage;
