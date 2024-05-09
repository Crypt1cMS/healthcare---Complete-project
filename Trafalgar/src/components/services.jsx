import './services.css'
import '../global.css'
import Frame1 from '../assets/Frame.png'
import Frame2 from '../assets/Frame 2.png'
import Frame3 from '../assets/Frame 3.png'
import Frame4 from '../assets/Frame 4.png'
import Frame5 from '../assets/Frame 5.png'
import Frame6 from '../assets/Frame 6.png'
import Bgelement from '../assets/services - bg element.png'
import Dotlines from '../assets/dot-line.png'

function Services() {
    
    return (
        <section className="services">

            <div className="services-text">
              <h2>Our Services</h2>
              <hr />
              <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.</p>
            </div>

            <div className="grid-services-container">

              <div className="grid-items">
                <img src={Frame1} alt="Search Icon" draggable='false'/>
                <h3>Search doctor</h3>
                <p>Choose your doctor from thousands of specialist, general, and trusted hospitals.</p>
              </div>

              <div className="grid-items">
                <img src={Frame2} alt="Pharmacy Icon" draggable='false'/>
                <h3>Online pharmacy</h3>
                <p>Buy  your medicines with our mobile application with a simple delivery system.</p>                
              </div>

              <div className="grid-items">
                <img src={Frame3} alt="Clipboard Icon" draggable='false'/>
                <h3>Consultation</h3>
                <p>Free consultation with our trusted doctors and get the best recomendations.</p>
              </div>

              <div className="grid-items">
                <img src={Frame4} alt="Details Icon" draggable='false'/>
                <h3>Details info</h3>
                <p>Free consultation with our trusted doctors and get the best recomendations.</p>
              </div>

              <div className="grid-items">
                <img src={Frame5} alt="Med kit Icon" draggable='false'/>
                <h3>Emergency care</h3>
                <p>You can get 24/7 urgent care for yourself or your children and your lovely family.</p>
              </div>

              <div className="grid-items">
                <img src={Frame6} alt="Medical Clipboard Icon" draggable='false'/>
                <h3>Tracking</h3>
                <p>Track and save your medical history and health data.</p>
              </div>

            </div>

            <img id='bg-services' src={Bgelement} alt="Backgorund element" draggable='false' />
            <img id='bg-services-dots' src={Dotlines} alt="Background element" draggable='false' />

            <div className="more-services">
              <button className='secondary-btn' type='submit'>Lear More</button>
            </div>

        </section>
    )
}

export default Services