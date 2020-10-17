import React from 'react'
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { NavHeader } from './Style/NavHeader.styles'


function Navbar() {
    return (
        <NavHeader>
            <nav className="nav">
                <Link className="logo" to="/">Clone</Link>
                <ul className="nav-items">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Shows</li>
                    <li className="nav-item">Movies</li>
                    <li className="nav-item">My List</li>
                </ul>
                <div className="searchbar">
                    <FontAwesome className="fa-search" name="search" />
                    <input type="search" name="serach" id="search" placeholder="search.." />
                </div>

            </nav>
        </NavHeader>
    )
}

export default Navbar
