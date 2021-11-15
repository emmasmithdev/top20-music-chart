import React from "react";
import "./titleBar.css";

const TitleBar = ({handleSelectChange, genres}) => {
    return (
        <div>
            <h1 className="title">Hit Parade</h1>
            <div>
                Select a genre: 
                <select className="genre-select" onChange={handleSelectChange}>
                    {genres.map(genre => {
                        return <option key={genre.name} value={genre.url}>{genre.name}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default TitleBar;