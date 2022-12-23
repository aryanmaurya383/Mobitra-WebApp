import React from 'react';
import './Cars.css';

export default function Cars() {
    return (
        <div className='carinfo'>
            <div className="left-checkbox">
                <input type="checkbox" />
            </div>
            <div className="right-cars-content">
                <div className="car-content-number"><h1>HR36AJ094</h1></div>
                <div className="car-content-status">Idle</div>
                <div className="car-content-address"><p>MDR138, Delhi, Haryana 121402</p></div>
                <div className="car-content-status-info">
                    <div className="car-content-status-cards speed">
                        <p>0.0 km/hr</p>
                        <p className='card-title'>SPEED</p>
                    </div>
                    <div className="car-content-status-cards distance">
                        <p>0.0 km</p>
                        <p className='card-title'>MOVED</p>
                    </div>
                    <div className="car-content-status-cards status">
                        <p>0 hr 0 min</p>
                        <p className='card-title'>IDLE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}