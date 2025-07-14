import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    const returnHome = () => {
        navigate("/")
    }
    return (
        <>
            <div><strong>You Are Directed to Wrong Page!</strong></div>
            <button className='button-day' onClick={returnHome}>Return to Home Page</button>
        </>
    )
}
export default NotFound