import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

/*
About the App: The Natural Event Mapping Tracker is powered by NASA, the Earth Observatory, and by Google Maps.
It tracks natural events and disasters around the globe and stores events from previous days as well. Click on an event icon to see more information about it.

for later viewing. It was built as a development project using React, MongoDB, Node/Express/Flask and CSS.
For more technical jargon, view my code repository here!

View Previous Data: Planned drop down menu that changes the day, starts logging and automatically adds to it.
- Set a limit or api key may go crazy due to rerendering

 <li>View Previous Data:</li>
*/
const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><strong>About the App:</strong></li>
                <li>This app was built as my first foray into web development. 
                    While working with React was interesting, I personally prefer backend development to UI development.
                    See the code repository by clicking the link below.</li>
            </ul>
            <footer className="menu-footer">
                <h3><FontAwesomeIcon icon={faCode} /> <a href="https://github.com/loganrmo" target="_blank" rel="noreferrer">Logan Romero</a> 2020</h3>
            </footer>
        </div>
    )
}

export default Menu
