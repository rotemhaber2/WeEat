import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import RestaurantList from "../RestaurantList/RestaurantList";
import backgroundImage from "../../images/weeat.jpg";

class RestaurantFilter extends Component {

    constructor(){
        super();
        this.state = {
            rating: 2,
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

            backgroundImage: 'url(' + backgroundImage + ')',
            height: '500px'
        }
        const search = {
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            verticalAlign: 'middle',
            margin: 'auto'
        }
        const searchInput = {
            fontSize: '20px',
            backgroundColor: '#f9f2ec'
        }
        const filter = {
            backgroundColor: '#86592d',
            padding: '10px 17%',
            color: '#f2f2f2',
            fontFamily: 'Arial,Tahoma,"Bitstream Vera Sans",sans-serif',
        }
        const title = {
            display: 'flex',
            alignItems: 'center',
            verticalAlign: 'middle',
            margin: 'auto',
            fontSize: '90px',
            fontFamily: 'Impact, Charcoal, sans-serif'
        }
        const select = {
            border: '1px solid #ccc',
            fontSize: '16px',
            height: '34px',
            width: '200px',
            backgroundColor: '#f9f2ec',
            margin: '10px'
        }
        const colCentered = {
            textAlign: 'center',
            fontFamily: 'Arial,Tahoma,"Bitstream Vera Sans",sans-serif',
            fontSize: '16px',
        }


        let filteredRestaurants = this.getFilteredRestaurants();

        return (
            <div>
                <nav style={style} className="navbar navbar-light bg-light">
                    <h1 style={title}>WeEat</h1>
                    <form style={search} >
                        <input style={searchInput} onChange={(e) => this.updateFilter('search',e)}
                               className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </nav>
                <Row style={filter}>
                    <Col xs="4" style={colCentered}>
                        Cuisine:
                        <select style={select} onChange={(e) => this.updateFilter('cuisine',e)}>
                            {this.createSelectItems(this.props.cuisines)}
                        </select>
                    </Col>
                    <Col xs="4"  style={colCentered}>
                        Rating:
                        <select style={select} onChange={(e) => this.updateFilter('rating',e)}>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                            <option value="5">5</option>
                        </select>
                    </Col>
                    <Col xs="4"  style={colCentered}>
                        Delivery time:
                        <select style={select} onChange={(e) => this.updateFilter('delivery',e)}>
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
             restaurant.rating >= that.state.rating &&
                 restaurant.name.toLowerCase().indexOf(that.state.search) !== -1
             )
            }
        );
    };


}

export default RestaurantFilter;


