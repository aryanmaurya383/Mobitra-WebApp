import React from 'react'
import './Map.css';
import Carlist from './Carlist'
function Map() {
    return (
        <div>
            <div className='map-page'>
            <div className='cars-list'>
                <Carlist />
            </div>
            <div className='map'>
                <img src="https://www.sumerugroups.com/frontend/images/map1.png"></img>
            </div>
            </div>
        </div>
    )
}

export default Map