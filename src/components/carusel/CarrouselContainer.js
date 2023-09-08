import React from 'react';
import Carrousel from './Carrousel';
import CountDown from '../CountDown';

const CarrouselContainer = () => {
    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="event_name">
                {/* add some dope logo? */}
                <div className = "wrapper">
                Formula f1
                </div>
            </div>
            <CountDown></CountDown>
        </div>
    )
}
export default CarrouselContainer;