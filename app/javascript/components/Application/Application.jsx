import React, { Component } from 'react'
import RestaurantList from "../RestaurantList/RestaurantList"
import Header from "../Header/Header"
import MapContainer from "../Map/MapContainer"


class Application extends Component {



    render() {
        return (
            <div>
                <h1>{'We Eat!'}</h1>
                <Header/>
                    <MapContainer/>
                    <RestaurantList/>
            </div>
        )
    }
}

export default Application;
