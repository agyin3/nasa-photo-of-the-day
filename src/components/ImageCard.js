import React from 'react';

export default function ImageCard(props) {

    return (
        <div>
            <img className="img" src = {props.src} alt = {props.alt}></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}