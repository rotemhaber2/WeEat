import React, { Component } from 'react'


class Header extends Component {

    render() {
        return (
            <div>
                <RestaurantFilter
                    cuisines={this.props.cuisines}
                />
            </div>
        )
    }
}

export default Header;
