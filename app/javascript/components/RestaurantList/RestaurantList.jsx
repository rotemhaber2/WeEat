import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';



class RestaurantList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { restaurants } = this.props;
        return (
            <div>
                <div>
                    { restaurants &&
                    restaurants.map((restaurant) =>
                            <Row key={restaurant.id}>
                                <Col xs="3">{restaurant.name}</Col>
                                <Col xs="auto">{restaurant.address}</Col>
                                <Col xs="3">delivery time: {restaurant.delivery_time}</Col>
                            </Row>
                    )}
                </div>
            </div>
        )
    }
}

export default RestaurantList;
