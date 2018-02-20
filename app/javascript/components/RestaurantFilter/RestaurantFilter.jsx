import React, { Component } from 'react'
import { Row, Col, Input } from 'reactstrap';

class RestaurantFilter extends Component {

    render() {
        const style = {
            backgroundColor: 'pink'
        }
        console.log(this.props);
        return (
            <div>
                <Row className="restaurant-list">
                    <Col xs="3">
                        Cuisine:
                        <select onChange={this.onDropdownSelected}>
                            {this.createSelectItems(this.props.cuisines)}
                        </select>
                    </Col>
                    <Col xs="auto">
                        Rating:
                        <select>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
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

    createSelectItems(itemsList) {
        let items = [];
        for (var key in itemsList) {
            items.push(<option key={itemsList[key].id}>{ itemsList[key].name }</option>);
        }
        return items;
    }

    onDropdownSelected(e) {
        console.log("THE VAL", e.target.value);
        //here you will see the current selected value of the select input
    }
}

export default RestaurantFilter;


