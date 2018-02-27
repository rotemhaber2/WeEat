import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import RestaurantList from "../RestaurantList/RestaurantList";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class RestaurantFilter extends Component {

    constructor(){
        super();
        this.state = {
            rating: '-1',
            delivery: '120',
            cuisine: '-1',
            search: '',
            restaurants: null,
            value: 10
        };

        this.updateFilter = this.updateFilter.bind(this);
        this.getFilteredRestaurants = this.getFilteredRestaurants.bind(this);
    }

    componentWillMount() {

        this.setState({restaurants : this.props.restaurants});
        this.setState({cuisines : this.props.cuisines});
    }

    render() {

        let filteredRestaurants = this.getFilteredRestaurants();

        return (
            <div>
                <nav className="style navbar navbar-light bg-light">
                    <h1 className="title">WeEat
                        <img className="weEatLogo" src={require('../../images/weeat_logo.svg')}/></h1>
                    <form className="search" >
                        <input className="searchInput" onChange={(e) => this.updateFilter('search',e)}
                               className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </nav>
                <Row className="filter">
                    <Col xs="4" className="colCentered">
                        What can we get you today?
                        <select className="select" onChange={(e) => this.updateFilter('cuisine',e)}>
                            {this.createSelectItems(this.props.cuisines)}
                        </select>
                    </Col>
                    <Col xs="4"  className="colCentered">
                        Show only rated above(1-5):
                        <select className="select" onChange={(e) => this.updateFilter('rating',e)}>
                            <option value="-1">All Rating</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </Col>
                    <Col xs="4"  className="colCentered">
                        We're here in...
                        <img className="motor" src={require('../../images/motorbike.svg')}/>
                        <Slider
                            min={30}
                            max={120}
                            value={this.state.delivery}
                            onChange={this.handleSliderChange}
                        />
                        <div className='value'>{this.state.delivery} minutes</div>
                    </Col>

                </Row>
                <div className='slider'>

                </div>
                <RestaurantList
                    restaurants={filteredRestaurants}
                    cuisines={this.state.cuisines}/>
            </div>

        )
    }

    createSelectItems(itemsList) {
        let items = [];
        items.push(<option defaultValue key='-1' value='-1'>All Cuisine</option>);
        for (var key in itemsList) {
            items.push(<option key={itemsList[key].id} value={itemsList[key].id}>{ itemsList[key].name }</option>);
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
             return ((restaurant.cuisine_id == that.state.cuisine || that.state.cuisine == -1) &&
                     (restaurant.delivery_time <= that.state.delivery) &&
                     (restaurant.rating >= that.state.rating || that.state.rating == -1) &&
                     restaurant.name.toLowerCase().indexOf(that.state.search) !== -1)
            }
        );
    };

    handleSliderChange = delivery => {
        this.setState({
            delivery: delivery
        })
    };



}

export default RestaurantFilter;


