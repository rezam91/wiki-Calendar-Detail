import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'

const GetData = ( {month,day} ) => {
    const [stat, setStat] = useState(true)
    const [events, setEvents] =useState([])
    const [births, setBirths] =useState([])
    const [deaths, setDeaths] =useState([])
    useEffect(() => {
        setStat(false)
        const timer = setTimeout(() => {
            setStat(true)
            
        },3000)
    },[day])
    const fetchEvent = (m,d) => {
        fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${m}/${d}`)
        .then((response) => response.json())
        .then((result) => {
            setEvents(result.events)
        });
    };
    const fetchBirth = (m,d) => {
        fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/births/${m}/${d}`)
        .then((response) => response.json())
        .then((result) => {
            setBirths(result.births)
        });
    };
    const fetchDeath = (m,d) => {
        fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/deaths/${m}/${d}`)
        .then((response) => response.json())
        .then((result) => {
            setDeaths(result.deaths)
        });
    };
  fetchEvent(month,day)
  fetchBirth(month,day)
  fetchDeath(month,day)

    return (
        <>
            <div>inside get data</div>
            {!stat && <div>Loading ...</div>}
            {stat && (
                <div className="result">
                    <div>
                        <div>Events:</div>
                        <ul>
                            {events.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div>Births:</div>
                        <ul>
                            {births.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div>Deaths:</div>
                        <ul>
                            {deaths.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                )
            }
        </>
    )
}
export default GetData