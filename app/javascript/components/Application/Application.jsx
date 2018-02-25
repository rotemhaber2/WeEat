import React, { Component } from 'react'
import MapContainer from "../Map/MapContainer"
import RestaurantFilter from "../RestaurantFilter/RestaurantFilter"
import Search from "../Search/Search"


class Application extends Component {

    constructor() {
        super();
        this.state = {cuisines: null,
                      restaurants: null};
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
                {this.state.restaurants &&
                <RestaurantFilter
                    cuisines={this.state.cuisines}
                    restaurants={this.state.restaurants}
                />
                }
                <div>
                    <MapContainer/>
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
