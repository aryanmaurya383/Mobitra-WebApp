import React from 'react';
import './Analytics.css';

function Analytics() {
    return (
        <div className='analytics'>
            <div className='analytics__leftBody'>
                <div className='analytics__leftBody__header'>
                    <div className='analytics__leftBody__header__content'>Yesterday</div>
                    <div className='analytics__leftBody__header__content'>7 Day</div>
                    <div className='analytics__leftBody__header__content'>15 Day</div>
                    <div className='analytics__leftBody__header__content'>30 Day</div>
                    <div className='analytics__leftBody__header__content'>icon 1 Jan 2022- 2 Feb 2022</div>
                    <select className='analytics__leftBody__header__content flex-right' name="cars" id="cars">
                        <option value="volvo">Distance</option>
                        <option value="saab">Fuel</option>
                        <option value="mercedes">Time</option>
                    </select>

                </div>
                <div className="analytics__leftBody__graph">
                    GRAPH
                </div>
            </div>
            <div className='analytics__rightBody'>
                <div><h1>Vehicles</h1></div>
            </div>

        </div>
    )
}

export default Analytics