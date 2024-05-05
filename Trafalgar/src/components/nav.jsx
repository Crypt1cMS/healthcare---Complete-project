import './nav.css'
import '../global.css'


import Logo from '../assets/logo.png'

function Nav() {

    return (

        <nav>

            <div className="logo">
                <img src={Logo} alt="Trafalgar Logo" draggable="false" />
            </div>

            <ul className='nav-items'>

                <li>
                    <p>Home</p>
                </li>

                <li>
                    <p>Find a doctor</p>
                </li>

                <li>
                    <p>Apps</p>
                </li>

                <li>
                    <p>Testimonials</p>
                </li>

                <li>
                    <p>About us</p>
                </li>

            </ul>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>

      </nav>
    )
}

export default Nav