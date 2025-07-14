import { useEffect, useState } from "react";
import {nanoid} from 'nanoid'
import eventPath from '../../assets/event.png'
import birthPath from '../../assets/birth.png'
import deathPath from '../../assets/grave.png'

const GetData = ( {month,day} ) => {
    const [stat, setStat] = useState(true)
    const [events, setEvents] =useState([])
    const [births, setBirths] =useState([])
    const [deaths, setDeaths] =useState([])
    useEffect(() => {
        setStat(false)
        const timer = setTimeout(() => {
            setStat(true)
            
        },4000)
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
            <div className="result">
                <div className="inner-box">
                    <div className="title">Events</div>
                    {!stat && <img className="pending-pic" src={eventPath} width="120px"/>}
                    {stat && (
                        <ul>
                            {events.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="inner-box">
                    <div className="title">Births</div>
                    {!stat && <img className="pending-pic" src={birthPath} width="120px"/>}
                    {stat && (
                        <ul>
                            {births.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="inner-box">
                    <div className="title">Deaths</div>
                    {!stat && <img className="pending-pic" src={deathPath} width="120px"/>}
                    {stat && (
                        <ul>
                            {deaths.map((item) => (
                                <li key={nanoid()}>{item.text}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}
export default GetData