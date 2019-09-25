import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard.js';
import axios from 'axios';
import MockData from './MockData.js';

export default function ImageData () {
    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const imageData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
                setImage(imageData.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <ImageCard title= {image.title} src = {image.hdurl} description = {image.explanation} alt = {image.title} />
        </div>
    );
}