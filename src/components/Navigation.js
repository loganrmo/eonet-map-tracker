import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'

function Navigation() {
    const [showMenu, setShowMenu] =  useState(false)
    
    let menu; 

    if(showMenu) {
        menu = Menu();
    }

    return (
        <nav>
            <FontAwesomeIcon className="menu-icon" icon={faBars} 
            onClick={() => setShowMenu(!showMenu)}/>
            {menu}
        </nav>
    )
}

export default Navigation
