import React from 'react';
import style from '../Styles/Estilos.module.css';
const MyPlayer = (props) => {
    console.log("PROPS MY PLAYER "+props)
    let videoUrl = "https://www.youtube.com/embed/" + props.videoSelected;
    return (
        <div className={style.videoPlayer}>
            <iframe width="620" height="425"
                src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
        </div>
        );
}
export default MyPlayer;