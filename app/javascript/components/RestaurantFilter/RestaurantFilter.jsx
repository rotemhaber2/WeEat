import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import RestaurantList from "../RestaurantList/RestaurantList";

class RestaurantFilter extends Component {

    constructor(){
        super();
        this.state = {
            rating: '2+',
            delivery: 120,
            cuisine: '1',
            search: '',
            restaurants: null
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.getFilteredRestaurants = this.getFilteredRestaurants.bind(this);
    }

    componentWillMount() {

        this.setState({restaurants : this.props.restaurants});
        this.setState({cuisines : this.props.cuisines});
    }

    render() {
        const style = {
            backgroundColor: 'lightGrey'
        }
        const filter = {
            backgroundColor: 'lightBlue',
            padding: '10px'
        }

        let filteredRestaurants = this.getFilteredRestaurants();

        return (
            <div style={style}>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input onChange={(e) => this.updateFilter('search',e)}
                               className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </nav>
                <Row className="restaurant-list" style={filter}>
                    <Col xs="3">
                        Cuisine:
                        <select onChange={(e) => this.updateFilter('cuisine',e)}>
                            {this.createSelectItems(this.props.cuisines)}
                        </select>
                    </Col>
                    <Col xs="auto">
                        Rating:
                        <select onChange={(e) => this.updateFilter('rating',e)}>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </Col>
                    <Col xs="3">
                        Delivery time:
                        <select onChange={(e) => this.updateFilter('delivery',e)}>
                            <option value="30">up to 30 minutes</option>
                            <option value="60">up to 60</option>
                            <option selected="selected" value="120">up to 120</option>
                        </select>
                    </Col>
                </Row>
                <RestaurantList
                    restaurants={filteredRestaurants}
                    cuisines={this.state.cuisines}/>
            </div>

        )
    }

    createSelectItems(itemsList) {
        let items = [];
        for (var key in itemsList) {
            items.push(<option value={itemsList[key].id}>{ itemsList[key].name }</option>);
        }
        return items;
    }

    updateFilter(filterName,e) {
        if(e) {
            this.setState({[filterName]: e.target.value})
        }
    }

    getFilteredRestaurants = () => {
        var that = this;
        return this.state.restaurants.filter((restaurant) => {
             return (restaurant.cuisine_id == that.state.cuisine &&
             restaurant.delivery_time <= that.state.delivery &&
                 restaurant.name.toLowerCase().indexOf(that.state.search) !== -1
             )
            }
        );
    };


}

export default RestaurantFilter;


