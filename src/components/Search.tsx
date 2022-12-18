import React from 'react'
import { useParams } from 'react-router-dom';
import { MovieInterface } from './Home';
import { movies } from '../data/_';

export default function Search() {

    const { search } = useParams<{ search: string }>();

    const movie = movies.filter((m: MovieInterface) => search?.toLocaleLowerCase().trim().includes(m.movie_name.trim().toLocaleLowerCase()));

    if(movie.length === 0) {
        window.location.href = `/${search}`;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{movie[0].movie_name}</h1>
            <div className="flex items-center mb-4">
                <img src={movie[0].thumbnail} alt={`Poster for ${movie[0].movie_name}`} className="w-64 h-64 rounded-lg mr-4" />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col px-4">
                        <h1 className="text-xl text-slate-800">{movie[0].movie_name}</h1>
                    </div>
                    <div className='px-4'>
                        <span className="text-gray-600 mr-2">Release Date:</span>
                        <span className="text-gray-800">{movie[0].release_date}</span>
                    </div>
                    <div className='px-4'>
                        <span className="text-gray-600 mr-2">Genre:</span>
                        <span className="text-gray-800">{movie[0].genre}</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-800 leading-relaxed mb-4">{movie[0].description}</p>
        </div>
    )
}