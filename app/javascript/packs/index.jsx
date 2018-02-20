import React from 'react'
import ReactDOM from 'react-dom'
import Application from "../components/Application/Application"


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Application/>,
        document.body.appendChild(document.createElement('div')),
    )
})
