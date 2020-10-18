import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { NavHeader } from './Style/NavHeader.styles'


function Navbar(props) {
    const [showMenu, setShowMenu] = useState(false)
    const dropdown = useRef(null)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdown.current && !dropdown.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);


    }, [])


    return (
        <NavHeader showMenu={showMenu} ref={dropdown}>
            {console.log(props)}
            <nav className="nav">
                <div className="inner">
                    <NavLink className="logo" to="/">CLONE</NavLink>
                    <button className="mobile-nav" onClick={toggleMenu}>
                        <FontAwesome className="fa fa-bars" name="bars" />
                    </button>
                </div>
                <ul className="nav-items" >
                    <li><NavLink className="nav-item activeClassName" exact path={"/"} to="/">Home</NavLink></li>
                    <li><NavLink className="nav-item activeClassName" to="/shows">Shows</NavLink></li>
                    <li><NavLink className="nav-item activeClassName" to="/movies">Movies</NavLink></li>
                    <li><NavLink className="nav-item activeClassName" to="/mylist">My List</NavLink></li>
                    <div className="searchbar">
                        <FontAwesome className="fa-search icon" name="search" />
                        <input type="search" name="serach" id="search" placeholder="search.." />
                    </div>
                </ul>


            </nav>
        </NavHeader>
    )
}

export default Navbar
