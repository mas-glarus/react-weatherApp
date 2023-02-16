import React from "react";

import './today.css';

const Today = (props) => {
    return (
        <div className="today-container">
            { (props.temp > 27) ? <img src={props.iconHot} alt=""/>
            : (props.temp > 0) ? <img src={props.icon} alt=""/> 
            : <img src={props.iconBelowZero} alt=""/>}

            <h1>Location: {props.location}</h1>
            <h2>Temperature: {props.temp}°C</h2>
        </div>
    )
}

export default Today;