import React from 'react';
import './Videoitem.css';

const Videoitem = ( {video, onVideoSelect} ) => {
    return (
        <div onClick={() => onVideoSelect(video)}className="video-item item">   
            <img className="ui image" src={video.snippet.thumbnail.url} alt={video.snippet.title}/>
             <div className="contain">
                 <div className="header">
                     {video.snippet.title}
                 </div>
            </div>
        </div>
    );
}

export default Videoitem;  