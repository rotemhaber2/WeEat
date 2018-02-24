import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

class Restaurant extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {

            backgroundColor: 'pink'
        }
        const symbol = {
            fontFamily: 'MyWebFont',
            color: '#F54343'
        }
        const tenbis = {
            width: '20px',
            marginLeft: '10px'
        }
        const { restaurant, cuisine } = this.props;

        return (
            <div>
                <div style={style}>
                    { restaurant && cuisine &&
                        <Row key={restaurant.id}>
                            <Col xs="3">{restaurant.name}</Col>
                            <Col xs="auto">{restaurant.address}</Col>
                            <Col xs="3">delivery time: {restaurant.delivery_time}</Col>
                            {restaurant.accepts_10_bis &&
                            <Col xs="3">accept 10bis:
                                <img style={tenbis} src={require('../../images/10bis.jpeg')}/></Col>
                            }
                            <Col xs="3">rating: {restaurant.rating}</Col>
                            <Col xs="3" ><p style={symbol}>{ cuisine.icon }</p></Col>
                        </Row>
                    }
                </div>
            </div>
        )
    }
}

export default Restaurant;

