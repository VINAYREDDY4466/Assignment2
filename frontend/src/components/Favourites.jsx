import React from 'react';

const Favourites = ({ favourites }) => {
    return (
        <div className="container mt-4">
            <h2>Favourite Articles</h2>
            {favourites.length > 0 ? (
                <ul className="list-group">
                    {favourites.map((article) => (
                        <li key={article.id} className="list-group-item">
                            {article.name} - ₹{article.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favourites added yet.</p>
            )}
        </div>
    );
};

export default Favourites;
