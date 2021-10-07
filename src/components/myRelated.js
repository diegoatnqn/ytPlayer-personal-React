import React from 'react';
import style from '../Styles/Estilos.module.css';

const MyRelated = (props) => {
    
    var misVideos = [];
    
    props.lista.forEach((item) => {
        let miVideo = {
            title: item.snippet.title.substring(0, 20),
            thumbnail: item.snippet.thumbnails.medium.url,
            videoId: item.id.videoId
        }
        misVideos.push(miVideo);
    });

    const miniaturas = () => {
        console.log(misVideos)
       let visualizador=misVideos.map((item) => {
           return (
               <div className={style.thumbnail} onClick={() => props.nuevoFeatured(item.videoId)} >
                   <img src={item.thumbnail} alt="youtube videos thumbnail"/>
                <p>{item.title}</p>
            </div>)
       })
        return visualizador
    }

    return (
        <div className={style.relatedVideos}>
            {miniaturas()}
        </div>
        );
}
export default MyRelated;