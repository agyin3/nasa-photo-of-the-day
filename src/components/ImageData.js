import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard.js';
import axios from 'axios';
// import MockData from './MockData.js';
import Form from './Form.js'

export default function ImageData () {

    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
    const [image, setImage] = useState([]);
    const [query, setQuery] = useState(formattedDate);

    useEffect(() => {
        async function fetchData() {
            try {
                const imageData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=uPC11JidhuaFX8k6hPqzgCR0WzZYkpn6pBAFQCAf&date=' + query);
                setImage(imageData.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();

        // setImage(MockData);
    }, [query])

    const changeDate = date => {
        setQuery(date.target.value);
    }



    return (
        <div>
            <Form submit = {changeDate} />
            <ImageCard title= {image.title} src = {image.url} description = {image.explanation} alt = {image.title} />
        </div>
    );
}