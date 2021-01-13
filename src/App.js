import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

// Work on loader
// Learn fetch, async
// Update API key
// NASA API KEY: CuKbI17Wgk6A47o4E6AL63YR2W8cfDUcD5s9K7DC

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      { !loading ? <> <Header /> <Map eventData={eventData}/></>: <Loader /> }
    </div>
  );
}

export default App;
