import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import StarsRating from 'react-stars-rating';

class Restaurant extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundColor: '#f9f2ec',
            paddingLeft: '100px',
            paddingRight: '100px',
            paddingTop: '10px',
            border: 'solid 1px lightGrey'
        }

        const tenbis = {
            width: '20px',
            marginLeft: '10px'
        }
        const webFront = {
            fontFamily: 'ef_cuisinesregular'
        }
        const { restaurant, cuisine } = this.props;

        return (
            <div>
                <div style={style}>
                    { restaurant && cuisine &&
                        <Row key={restaurant.id}>
                            <i class="fas fa-user"></i>
                            <Col xs="2">{restaurant.name}</Col>
                            <Col xs="2">{restaurant.address}</Col>
                            <Col xs="2">delivery time: {restaurant.delivery_time}</Col>
                            <Col xs="2">
                                <StarsRating rating={restaurant.rating} />
                            </Col>
                            {restaurant.accepts_10_bis &&
                            <Col xs="1"><img style={tenbis} src={require('../../images/10bis.jpeg')}/></Col>
                            }
                                {/*<Col xs="3"><span style={webFront} dangerouslySetInnerHTML={{__html: 'P'}}>P</span></Col>*/}

                            {/*<Col xs="3" ><p style={symbol}>{ String.fromCharCode( restaurant.cuisine ) }</p></Col>*/}
                        </Row>
                    }
                </div>
            </div>
        )
    }
}

export default Restaurant;

