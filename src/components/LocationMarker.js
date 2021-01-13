import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire'
import volcanoIcon from '@iconify/icons-mdi/terrain'
import stormIcon from '@iconify/icons-mdi/weather-lightning-rainy'
import icebergIcon from '@iconify/icons-mdi/eject'

const LocationMarker = ({ type, lat, lng, onClick }) => {
    if (type === "wildfire") {
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={fireIcon} className="fire-icon" />
            </div>
        )
    } else if (type === "volcano") {
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={volcanoIcon} className="volcano-icon" />
            </div>
        )
    } else if (type === "storm") {
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={stormIcon} className="storm-icon" />
            </div>
        )
    } else if (type === "iceberg") {
        return (
            <div className="location-marker" onClick={onClick}>
                <Icon icon={icebergIcon} className="iceberg-icon" />
            </div>
        )
    }
}

export default LocationMarker
