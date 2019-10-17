import React from 'react';
import './Hello.css'
const Hello = (props)=>{
    return (
        <div>
            <h1>Hello World!</h1>
            <p>{props.greetings} {props.year}</p>
        </div>
    );
};
export default Hello;