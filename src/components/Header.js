import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

//  <h2>Logan Romero 2020 - Powered by the NASA Earth Observatory Natural Event Tracker </h2>

const Header = () => {
    return (
        <header className="header">
            <h1><FontAwesomeIcon icon={faGlobeAmericas} /> Natural Event Mapping Tracker</h1>
            <Navigation />
        </header>
    )
}

export default Header
