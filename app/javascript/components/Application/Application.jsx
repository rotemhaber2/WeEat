import React, { Component } from 'react'
import RestaurantList from "../RestaurantList/RestaurantList"
import Header from "../Header/Header"
import MapContainer from "../Map/MapContainer"


class Application extends Component {

    constructor() {
        super();
        this.state = {cuisines: null};
    }

    setCuisineState(cuisines){
        this.setState({cuisines : cuisines});
    }

    setRestState(restaurants){
        this.setState({restaurants : restaurants});
    }

    componentWillMount() {

        this.fetchCuisine();
        this.fetchRestaurants();

    }

    render() {

        return (
            <div>
                <h1>{'We Eat!'}</h1>
                    <Header
                        cuisines={this.state.cuisines}
                    />
                <div>
                    <MapContainer/>
                    <RestaurantList
                        cuisines={this.state.cuisines}
                        restaurants={this.state.restaurants}
                    />
                </div>
            </div>
        )
    }

    fetchCuisine(){
        var that = this;
        fetch('/cuisines.json').
        then(((response) => response.json())
        ).then((response) => {
            that.setCuisineState(response)
        })
    }

    fetchRestaurants(){
        var that = this;
        fetch('/restaurants.json').
        then(((response) => response.json())
        ).then((response) => {
            that.setRestState(response)
        })
    }

}

export default Application;
