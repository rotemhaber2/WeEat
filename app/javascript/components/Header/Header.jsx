import React, { Component } from 'react'
import RestaurantFilter from "../RestaurantFilter/RestaurantFilter"
import Search from "../Search/Search"

class Header extends Component {

    render() {
        return (
            <div>
                <RestaurantFilter
                    cuisines={this.props.cuisines}
                />
                <Search/>
            </div>
        )
    }
}

export default Header;
