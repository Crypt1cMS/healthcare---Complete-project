import './footer.css'
import '../global.css'

function Footer() {
    
    return(
        <>
            <footer>

                <div className="footer-wrapper">
                    
                    <div className="footer-trafalgar-description">

                        <div className="footer-logo">
                            <div className="circle-footer"><h3>T</h3></div>
                            <h3>Trafalgar</h3> 
                        </div>

                        <div className="footer-description">
                            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>
                            <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
                        </div>

                    </div>

                    <div className="footer-list">
                        <h3>Company</h3>

                        <ul>
                            <li>
                                <a href="#"><p>About</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Testimonials</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Find a doctor</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Apps</p></a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list">
                        <h3>Region</h3>

                        <ul>
                            <li>
                                <a href="#"><p>Indonesia</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Singapore</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Hongkong</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Canada</p></a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list">
                        <h3>Help</h3>

                        <ul>
                            <li>
                                <a href="#"><p>Help center</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Contact support</p></a>
                            </li>

                            <li>
                                <a href="#"><p>Instructions</p></a>
                            </li>

                            <li>
                                <a href="#"><p>How it works</p></a>
                            </li>
                        </ul>
                    </div>

                </div>
                
            </footer>
        </>
    )
}

export default Footer