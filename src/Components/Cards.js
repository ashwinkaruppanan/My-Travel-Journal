import React from "react";

function Cards(props) {
    return <div className="card">
        <div className="card-left">
            <img src={props.img} alt="" />
        </div>
        <div className="card-right">
            <i className="fa-solid fa-location-dot"></i>
            <h4>{props.city}</h4>
            <a href={props.map} >View on Google Map</a>
            <h2>{props.place}</h2>
            <p >{props.date}</p>
            <p className="bold">{props.des}</p>
        </div>
    </div>
}

export default Cards;