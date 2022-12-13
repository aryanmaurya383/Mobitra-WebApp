import React from 'react';
import './Analytics.css';
import { VehiclesInfoHeading, VehiclesInfoContent } from "./VehiclesInfo";
import Chart from 'react-google-charts';



const LineData = [
    ['x', 'dogs', 'cats'],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
]
const LineChartOptions = {

    series: {
        1: { curveType: 'function' },
    },
    legend: "none"
}

function Analytics() {
    return (
        <div className='analytics'>
            <div className='analytics__leftBody'>
                <div className='analytics__leftBody__header'>
                    <div className='analytics__leftBody__header__content'>Yesterday</div>
                    <div className='analytics__leftBody__header__content'>7 Day</div>
                    <div className='analytics__leftBody__header__content'>15 Day</div>
                    <div className='analytics__leftBody__header__content'>30 Day</div>
                    <div className='analytics__leftBody__header__content '>
                        1 Jan 2022- 2 Feb 2022
                    </div>
                    <select className='analytics__leftBody__header__content left-margin' name="cars" id="cars">
                        <option value="distance">Distance</option>
                        <option value="fuel">Fuel</option>
                        <option value="time">Time</option>
                    </select>

                </div>
                <div className="analytics__leftBody__graph">
                    <Chart
                        className='graph__chart'
                        width={'86vw'}
                        height={'45vw'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={LineData}
                        options={LineChartOptions}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
            </div>
            <div className='analytics__rightBody'>
                <div><h1>Vehicles</h1></div>
                <div className="vehicles__info">
                    <VehiclesInfoHeading />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                    <VehiclesInfoContent />
                </div>
            </div>

        </div>
    )
}

export default Analytics