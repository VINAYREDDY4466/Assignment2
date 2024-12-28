import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Favourites from './components/Favourites';
import History from './components/History';
import { AuthContext } from './context/AuthContext';

const App = () => {
    const { favourites, addToFavourites } = useContext(AuthContext);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage onAddToFavourites={addToFavourites} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favourites" element={<Favourites favourites={favourites} />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
};

export default App;
