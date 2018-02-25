import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import ReactStars from 'react-stars'


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
                            <Col xs="2">{restaurant.name}</Col>
                            <Col xs="2">{restaurant.address}</Col>
                            <Col xs="2">delivery time: {restaurant.delivery_time}</Col>
                            <Col xs="2">
                            <ReactStars
                                count={restaurant.rating}
                                size={22}
                                color2={'#ffd700'} />
                            </Col>
                            {restaurant.accepts_10_bis &&
                            <Col xs="2">accept 10bis:
                                <img style={tenbis} src={require('../../images/10bis.jpeg')}/></Col>
                            }
                            {/*<Col xs="3" ><p style={symbol}>{ String.fromCharCode( restaurant.cuisine ) }</p></Col>*/}
                        </Row>
                    }
                </div>
            </div>
        )
    }
}

export default Restaurant;

