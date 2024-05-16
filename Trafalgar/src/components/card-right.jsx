import PropTypes from 'prop-types';
import './card-right.css';
import '../global.css'

function CardRight({ image, cardHeader, cardDescription }) {

    return (
        <>
            <div className="right-card-container">

                <div className="card-image-content">
                    <img src={image} alt="Ilustration" draggable="false" />
                </div>

                <div className="right-card-text-content">

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

CardRight.propTypes = {
    image: PropTypes.string.isRequired,
    cardHeader: PropTypes.string.isRequired, 
    cardDescription: PropTypes.string.isRequired,
};

export default CardRight