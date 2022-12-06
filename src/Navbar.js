import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [currentPage, setCurrentPage] = useState("vehicles");


    return (
        <div className='navbar'>
            <Link to="/">
                <div className="navbar__logo">
                    <div className='navbar__logo__image'>
                        <img src="" alt="Logo" />
                    </div>
                </div>
            </Link>
            <Link to="/vehicles">
                <div className={`navbar__vehicles  ${currentPage === "vehicles" && "bottom-border"}`} onClick={() => setCurrentPage("vehicles")}>
                    Vehicles
                </div>
            </Link>
            <Link to="/map">
                <div className={`navbar__map ${currentPage === "map" && "bottom-border"}`} onClick={() => setCurrentPage("map")}>
                    Map
                </div>
            </Link>
            <Link to="/analytics">
                <div className={`navbar__analytics ${currentPage === "analytics" && "bottom-border"}`} onClick={() => setCurrentPage("analytics")} >
                    Analytics
                </div>
            </Link>
            <Link to="/report">
                <div className={`navbar__report ${currentPage === "report" && "bottom-border"}`} onClick={() => setCurrentPage("report")}>
                    Report
                </div>
            </Link>
        </div>
    )
}

export default Navbar