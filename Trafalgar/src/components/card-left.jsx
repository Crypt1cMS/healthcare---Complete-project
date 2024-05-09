import PropTypes from 'prop-types';
import './card-left.css';
import '../global.css'

function CardLeft({ image, cardHeader, cardDescription }) {

    return (
        <>
            <div className="left-card-container">

                <div className="card-image-content">
                    <img src={image} alt="Ilustration" />
                </div>

                <div className="card-text-content">

                    <div className="content-wrapper">
                        <h2>{cardHeader}</h2>
                        <hr />
                        <p>{cardDescription}</p>
                        <button className='secondary-btn' type='submit'>Learn More</button>
                    </div>

                </div>

            </div>

        </>
    )
}

CardLeft.propTypes = {
    image: PropTypes.string.isRequired,
    cardHeader: PropTypes.string.isRequired, 
    cardDescription: PropTypes.string.isRequired,
};

export default CardLeft