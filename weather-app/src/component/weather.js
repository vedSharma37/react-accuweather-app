import React from 'react';


const Weather = props =>(
    <div>
        {props.temprature && <p>Temprature : { props.temprature }</p>}
        {props.city && <p>City : {props.city}</p>}
        {props.country && <p>country : {props.country}</p>}
        {props.humidity && <p>Humidity : {props.humidity}</p>}
        {props.discription && <p>Discription : {props.discription}</p>}
        {props.error && <p>{props.error}</p>}
    </div>   
)

export default Weather;