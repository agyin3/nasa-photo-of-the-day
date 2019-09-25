import React from 'react';

export default function ImageCard(props) {

    return (
        <div>
            <h2>{props.title}</h2>
            <img src = {props.src} alt = {props.alt}></img>
            <p>{props.description}</p>
        </div>
    );
}