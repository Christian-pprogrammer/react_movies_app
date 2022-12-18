import React from 'react';
import { useParams } from "react-router-dom";
import { movies } from '../data/_';
import { MovieInterface } from './Home';

export default function Movie() {
    const { id } = useParams<{ id: string }>();

    const movie = movies.filter((m: MovieInterface) => (m.id).toString() === id);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{movie[0].movie_name}</h1>
            <div className="flex items-center mb-4">
                <img src={movie[0].thumbnail} alt={`Poster for ${movie[0].movie_name}`} className="w-64 h-64 rounded-lg mr-4" />
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="text-gray-600 mr-2">Release Date:</span>
                        <span className="text-gray-800">{movie[0].release_date}</span>
                    </div>
                    <div>
                        <span className="text-gray-600 mr-2">Genre:</span>
                        <span className="text-gray-800">{movie[0].genre}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-800 leading-relaxed mb-4">{movie[0].description}</p>
        </div>
    )
}
