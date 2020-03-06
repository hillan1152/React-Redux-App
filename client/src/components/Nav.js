import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav-container">
            <h2>Brew Hunter</h2>
            <Link><h3>Brew List</h3></Link> 
        </div>
    )
}
