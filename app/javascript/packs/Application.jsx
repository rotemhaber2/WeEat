import React from 'react'
import ReactDOM from 'react-dom'
import RestaurantList from "../components/RestaurantList/RestaurantList"


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <RestaurantList/>,
        document.body.appendChild(document.createElement('div')),
    )
})
