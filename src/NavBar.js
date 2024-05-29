import React from 'react';
import './NavBar.css';
function NavBar() {
    return (
        <div class="nav">
            <p className="name">SG</p>
            <nav>
                <ul className="navbar">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">About</a></li>
                    <li className="nav-item"><a href="#">Project</a></li>
                    <li className="nav-item"><a href="#">Resume</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;