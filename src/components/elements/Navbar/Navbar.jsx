import React from 'react'
import { NavLink } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { NavHeader } from './Style/NavHeader.styles'


function Navbar() {
    return (
        <NavHeader>
            <nav className="nav">
                <NavLink className="logo" to="/">CLONE</NavLink>
                <ul className="nav-items">
                    <NavLink className="nav-item activeClassName" exact path={"/"} to="/">Home</NavLink>
                    <NavLink className="nav-item activeClassName" to="/shows">Shows</NavLink>
                    <NavLink className="nav-item activeClassName" to="/movies">Movies</NavLink>
                    <NavLink className="nav-item activeClassName" to="/mylist">My List</NavLink>
                </ul>
                <div className="searchbar">
                    <FontAwesome className="fa-search icon" name="search" />
                    <input type="search" name="serach" id="search" placeholder="search.." />
                </div>

            </nav>
        </NavHeader>
    )
}

export default Navbar
