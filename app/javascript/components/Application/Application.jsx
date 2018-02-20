import React, { Component } from 'react'
import RestaurantList from "../RestaurantList/RestaurantList"
import Header from "../Header/Header"
import MapContainer from "../Map/MapContainer"


class Application extends Component {

    constructor() {
        super();
        this.state = {cuisines: null};
    }

    setRestState(cuisines){
        this.setState({cuisines : cuisines});
    }

    componentWillMount() {
        var that = this;
        fetch('/cuisines.json').
        then(((response) => response.json())
        ).then((response) => {
            that.setRestState(response)
        })
    }

    render() {
        return (
            <div>
                <h1>{'We Eat!'}</h1>
                    <Header
                        cuisines={this.state.cuisines}
                        // restaurants={restaurants}
                    />
                    <MapContainer/>
                    <RestaurantList
                        cuisines={this.state.cuisines}
                        // restaurants={restaurants}
                    />
            </div>
        )
    }
}

export default Application;
