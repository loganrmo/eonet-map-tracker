import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const wildfireID = 8;
const stormID = 10;
const volcanoID = 12;
const icebergID = 15;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    // This checks to see if its a wildfire
    // Loop through for storms and whatnot too
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === wildfireID) {
            return <LocationMarker type="wildfire" lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        } 
        
        else if(ev.categories[0].id === volcanoID) {
            // Considers the case where the data provided is of a greater scope
            if(ev.geometries[0].type === "Polygon"){
                return <LocationMarker type="volcano" lat={ev.geometries[0].coordinates[0][0][1]} lng={ev.geometries[0].coordinates[0][0][0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
            } else{
            return <LocationMarker type="volcano" lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
            }
        }

        // ev.geometries[0].coordinates[0]

        else if(ev.categories[0].id === stormID) {
            return <LocationMarker type="storm" lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }

        else if(ev.categories[0].id === icebergID) {
            return <LocationMarker type="iceberg" lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }
        return null
    })

    

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                >

                {markers}
            </GoogleMapReact>

            {locationInfo && <LocationInfoBox info={locationInfo} />}
        
        </div>
    )
}

const setDefaultPosition = () => {
    Map.defaultProps = {
        center: {
            lat: 43.4643,
            lng: 80.5204
        },
        zoom: 6
    }
}

const setUserPosition = (position) => {
    Map.defaultProps = {
        center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        },
        zoom: 10
    }
}

if(window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(setUserPosition, setDefaultPosition);

} else {
    setDefaultPosition()
}

export default Map;
