import React from "react";
import Card from "./Cards";
import data from "../data";

const cardData = data.map(dat => <Card
    img={dat.img}
    city={dat.cityName}
    map={dat.googleMapUrl}
    place={dat.placeName}
    date={dat.date}
    des={dat.description} />)

function App() {
    return <>
        <header>My Travel Journal</header>
        {cardData}
    </>
}

export default App;