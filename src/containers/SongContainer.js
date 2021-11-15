import React, {useState, useEffect} from "react";
import SongList from "../components/SongList.js";
import TitleBar from "../components/TitleBar.js";

const SongContainer = ({genres}) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        loadSongs(genres[0].url)
    }, [genres])

    const loadSongs = url => {
        fetch(url)
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .catch(err => console.err);
    }

    const handleSelectChange = event => {
        loadSongs(event.target.value);
    }

    return (
        <>  
            <TitleBar
                handleSelectChange={handleSelectChange}
                genres={genres}
            />
            <SongList
                songs={songs}
                url={genres[0].url}
                handleSelectChange={handleSelectChange}
            />
        </>    
    )
}

export default SongContainer;
