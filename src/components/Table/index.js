import React from 'react';
import './style.css'
import {movie} from '../../services/movieApi/movies'
import {Search} from '../Search/Search'

export default function Table(){
    
    return (
        <main id="container">
            
            <table id="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>RunTime</th>
                        <th>Revenue</th>
                        <th>Genre</th>
                    </tr>
                </thead>
               
                <tbody>
                    {movie.map( (movie, index) => {
                        return (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.runtime}</td>
                                <td>{movie.revenue}</td>
                                <td>{movie.genre.reduce( (acc, curr) => {
                                    return `${acc}, ${curr}` 
                                })}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
} 