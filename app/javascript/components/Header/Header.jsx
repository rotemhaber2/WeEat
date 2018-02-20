import React, { Component } from 'react'
import RestaurantFilter from "../RestaurantFilter/RestaurantFilter"
import Search from "../Search/Search"

class Header extends Component {

    render() {
        return (
            <div>
                <Search/>
                <RestaurantFilter
                    cuisines={this.props.cuisines}
                />
            </div>
        )
    }
}

export default Header;
