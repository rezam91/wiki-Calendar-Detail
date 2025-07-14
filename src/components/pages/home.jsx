import GetData from '../api/getData'
import dayjs from "dayjs"
import { useEffect, useMemo, useState } from "react"

const Home = () => {
    const [currentDay, setCurrentDay] = useState(dayjs())
    const [m, setM] = useState(currentDay.month()+1)
    const [d, setD] = useState(currentDay.date())
    
    const previousDay = () => {
        setCurrentDay(currentDay.add(-1, 'day'))
    }
    useEffect(() => {
        setD(currentDay.date())
        setM(currentDay.month())+1
    },[currentDay])
    const nextDay = () => {
        setCurrentDay(currentDay.add(1, 'day'))
    }
    
    return (
        <>
            <div>Month:<span>{" " +currentDay.format("MMMM")}</span></div>
            <div>Day:<span>{" " + d}</span></div>
            <div>
                <button onClick={previousDay}>Previous Day</button>
                <button onClick={nextDay}>Next Day</button>
            </div>
            <div>Home</div>
            <GetData month={m} day={d} />

        </>
    )
}

export default Home