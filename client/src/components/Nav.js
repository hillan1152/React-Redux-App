import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav-container">
            <Link to="/"><h2>Brew Spot</h2></Link>
        </div>
    )
}
