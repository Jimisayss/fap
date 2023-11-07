import React from 'react';
import { Link } from 'react-router-dom';
import './theme.css'; // Import the theme CSS

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/budget-planner">Budget Planner</Link></li>
                {/* ... other navigation links ... */}
            </ul>
        </nav>
    );
}

export default NavBar;
