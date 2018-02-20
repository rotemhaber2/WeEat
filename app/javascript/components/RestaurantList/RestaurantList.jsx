import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';



class RestaurantList extends Component {

    constructor() {
        super();
        this.state = {restaurants: null};
    }

    setRestState(restaurants){
        this.setState({restaurants : restaurants});
    }

    componentWillMount() {
        var that = this;
        fetch('/restaurants.json').
        then(((response) => response.json())
        ).then((response) => {
            that.setRestState(response)
        })
    }

    render() {
        return (
            <div>
                <h1>{'Restaurant list'}</h1>
                <div>
                    { this.state && this.state.restaurants &&
                    this.state.restaurants.map((restaurant) =>
                        <div>
                            <Row>
                                <Col xs="3">{restaurant.name}</Col>
                                <Col xs="auto">{restaurant.address}</Col>
                                <Col xs="3">delivery time: {restaurant.delivery_time}</Col>
                            </Row>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default RestaurantList;
