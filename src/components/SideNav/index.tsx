import React from "react";
import { Link } from 'react-router-dom';
import './sidenav.scss';

const SideNav = () => {

    return (
        <div className="sideNav">
            <nav>
                <Link to="/" className="no-text-decoration">
                    <div className="menu-title">Dashboard</div>
                </Link>
            </nav>
        </div>

    );
}

export default SideNav;