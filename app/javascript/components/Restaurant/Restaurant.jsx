import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import StarsRating from 'react-stars-rating';

class Restaurant extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { restaurant, cuisine } = this.props;

        return (
            <div>
                <div className='restaurant'>
                    { restaurant && cuisine &&
                        <Row key={restaurant.id}>
                            <Col xs="3"><span className='webFront'>{cuisine.icon}</span></Col>
                            <Col xs="2">{restaurant.name}</Col>
                            <Col xs="2">{restaurant.address}</Col>
                            <Col xs="2">delivery time: {restaurant.delivery_time}</Col>
                            <Col xs="2">
                                <StarsRating rating={restaurant.rating} />
                            </Col>
                            {restaurant.accepts_10_bis &&
                            <Col xs="1"><img className='tenbis' src={require('../../images/10bis.jpeg')}/></Col>
                            }

                        </Row>
                    }
                </div>
            </div>
        )
    }
}

export default Restaurant;

