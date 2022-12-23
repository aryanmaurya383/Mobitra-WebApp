import React from 'react'
import './Vehicles.css';
import Cars from './Cars.js'

function Vehicles() {
    return (
        <div className='vehicles-page'>
            <div className='carstate'>
                <button className='all'>All</button>
                <button className='running'>Running</button>
                <button className='idle'>Idle</button>
                <button className='parked'>Parked</button>
                <button className='unknown'>Unknown</button>
            </div>
            <div className='main'>
                <div className='cars'>
                    <Cars />
                    <Cars />
                    <Cars />
                    <Cars />
                    <Cars />

                </div>
                <div className='vehicles-map'>
                    <img src="https://www.sumerugroups.com/frontend/images/map1.png"></img>
                </div>
            </div>

        </div>

    )
}

export default Vehicles