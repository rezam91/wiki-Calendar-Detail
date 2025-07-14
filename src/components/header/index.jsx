import logoPath from '../../assets/magnifying-glass.png'
const Header = () => {
    return (
        <>
            <div className="w-header">W</div>
            <img className='logo' src={logoPath} width="50px"/>
            <div>Explore what happened on this day in HISTORY!</div>
        </>
    )
}

export default Header