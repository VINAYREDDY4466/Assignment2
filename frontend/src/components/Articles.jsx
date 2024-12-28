import React, { useState } from 'react';


const Articles = ({ onAddToFavourites }) => {
    const articles = [
        { id: 1,image:"",name: 'Shirt A', price: 500 },
        { id: 2, image:" ",name: 'Shirt B', price: 600 },
        { id: 3, image:" ", name: 'Shirt C', price: 700 },
    ];

    return (
        <div className="container mt-4">
            <h2>Articles</h2>
            <div className="row">
                {articles.map((article) => (
                    <div key={article.id} className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5>{article.image}</h5>
                                <h5 className="card-title">{article.name}</h5>
                                <p className="card-text">Price: ₹{article.price}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => onAddToFavourites(article)}
                                >
                                    Add to Favourites
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
