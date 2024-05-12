import React from 'react'
import img1 from "../../../assets/celeb5.jpeg"
import img2 from "../../../assets/celeb6.jpeg"
import img3 from "../../../assets/celeb7.jpeg"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./founders.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Founders = () => {
    return (
        <div className='founders'>
            <div className="founder">
                <div className='img'>
                    <img src={img1} alt="founder img"/>
                </div>
                <h4 className='mt-3'>John Doe</h4>
                <p className='paragraph'><small>Founder and CEO of the company.</small></p>
                <div className="social">
                    <FontAwesomeIcon className='social_icon' icon={faXTwitter}/>
                    <FontAwesomeIcon className='social_icon' icon={faInstagram} />
                    <FontAwesomeIcon className='social_icon' icon={faLinkedin} />
                </div>
            </div>
            <div className="founder">
                <div className='img'>
                    <img src={img2} alt="founder img"/>
                </div>
                <h4 className='mt-3'>Emma Watson</h4>
                <p className='paragraph'><small>Managing Director.</small></p>
                <div className="social">
                    <FontAwesomeIcon className='social_icon' icon={faXTwitter}/>
                    <FontAwesomeIcon className='social_icon' icon={faInstagram} />
                    <FontAwesomeIcon className='social_icon' icon={faLinkedin} />
                </div>
            </div>
            <div className="founder">
                <div className='img'>
                    <img src={img3} alt="founder img"/>
                </div>
                <h4 className='mt-3'>Farah Khan</h4>
                <p className='paragraph'><small>Product Designer.</small></p>
                <div className="social">
                    <FontAwesomeIcon className='social_icon' icon={faXTwitter}/>
                    <FontAwesomeIcon className='social_icon' icon={faInstagram} />
                    <FontAwesomeIcon className='social_icon' icon={faLinkedin} />
                </div>
            </div>
        </div>
    )
}

export default Founders