import React from 'react';
import './Search.css'
export const Search = () => {
    return (
        <div className="Flex SearchMovie">
            <form action="">
                <label htmlFor="">
                    <input type="text" placeholder='Filter by Title'/>
                </label>
                <label htmlFor="">
                    <input type="text" placeholder='Filter by Gen'/>
                </label>
            </form>
        </div>
    )
}