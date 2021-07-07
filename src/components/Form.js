import React from 'react';

export default function Form(props) {

    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();

    return(
        <div>
            
            <input type='date' max = {formattedDate} onChange = {props.submit}/>
        </div>
    )
}