import './hero.css'
import '../global.css'
import hero from '../assets/trafalgar-header illustration 1.png'
import Dotlines from '../assets/dot-line.png'

function Hero() {

    return (

        <section className='hero'>

            <div className="dots-ilustration">
                <img src={Dotlines} alt="dots" />
            </div>

            <div className="description-container-left">
                <div className="description-text">
                <h1>Virtual healthcare for you</h1>
                <p>Trafalgar provides progressives, and affordable haelthcare, accessible on mobile and online for everyone.</p>
                <button type='submit' className='btn-primary'>Consult Today</button>
                </div>
            </div>

            <div className="img-right">
                <img src={hero} alt="Trafalgar Ilustration" draggable="false"/>
            </div>

        </section>

    )
}

export default Hero
