import React from 'react';
import './VehiclesInfo.css';

export function VehiclesInfoHeading() {
    return (
        <div className='vehiclesInfoHeading'>
            <div className="vehiclesInfoHeading__element">
                <input type="checkbox" />
            </div>
            <div className="vehiclesInfoHeading__element">
                <p>Vehicles</p>
            </div>
            <div className="vehiclesInfoHeading__element">
                <p>Distance</p>
            </div>
        </div>
    )
}

export function VehiclesInfoContent() {
    return (
        <div className='vehiclesInfoContent'>
            <div className="vehiclesInfoContent__element">
                <input type="checkbox" />
            </div>
            <div className="vehiclesInfoContent__element">
                <p>HR36AJ0394</p>
            </div>
            <div className="vehiclesInfoContent__element">
                <p>2700</p>
            </div>
        </div>
    )
}

