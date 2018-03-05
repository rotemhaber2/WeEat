import React, { Component } from 'react'
import Restaurant from "../Restaurant/Restaurant"

class RestaurantList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { restaurants, cuisines } = this.props;
        return (
            <div>
                <div>
                    { restaurants && cuisines &&
                    restaurants.map((restaurant) =>
                    <Restaurant
                        key={restaurant.id}
                        restaurant={restaurant}
                        cuisine={ cuisines.find(function (cuisine) { return cuisine.id == restaurant.cuisine_id; })}
                    />
                    )}
                </div>
            </div>
        )
    }
}

export default RestaurantList;

