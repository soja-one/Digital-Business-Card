import reactlogo from '../images/react.png'
export default function Navbar(){
    return (
        <nav className='nav'>
        <div className='logo'>
        <img src= {reactlogo} alt='reactlogo'></img>
        <h2>ReactFacts</h2>
        </div>
        
        <p>React Course - Project 1</p>

        </nav>
    )
}