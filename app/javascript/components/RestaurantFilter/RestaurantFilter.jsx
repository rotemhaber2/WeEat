import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

class RestaurantFilter extends Component {

    render() {
        return (
            <div>
                <Row className="restaurant-list">
                    <Col xs="3">
                        Cuisine:
                        <select>
                            <option>Italian</option>
                            <option>American</option>
                            <option>Asian</option>
                        </select>
                    </Col>
                    <Col xs="auto">
                        Rating:
                        <select>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </Col>
                    <Col xs="3">
                        Speed:
                        <select>
                            <option>up to 30 minutes</option>
                            <option>30-60</option>
                            <option>60-120</option>
                        </select>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default RestaurantFilter;
