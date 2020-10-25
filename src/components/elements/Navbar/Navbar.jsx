import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { NavHeader } from './Style/NavHeader.styles'


function Navbar({ setDimentions, showMenu, setShowMenu }) {
    const [show, setShow] = useState(false)
    const [addbgColor, setAddbgColor] = useState(false)

    const getWindowWidth = () => {
        if (window.innerWidth > 768) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const getWindowScrollY = () => {
        if (window.scrollY > 15) {
            setAddbgColor(true)
        } else {
            setAddbgColor(false)

        }
    }

    useEffect(() => {
        window.addEventListener("resize", getWindowWidth);

        return () => window.removeEventListener("resize", getWindowWidth)

    }, [])
    useEffect(() => {
        window.addEventListener("scroll", getWindowScrollY);

        return () => window.removeEventListener("scroll", getWindowScrollY)

    }, [])







    return (
        <NavHeader show={show} addbgColor={addbgColor}>


            <NavLink className="logo" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png" alt="Netflix logo" /></NavLink>
            <nav className="nav">
                <ul className="nav-items" >
                    <li><NavLink className="nav-item" exact path={"/"} to="/">Home</NavLink></li>
                    <li className="nav-item nav-item-pseudo">Shows</li>
                    <li className="nav-item nav-item-pseudo">Movies</li>
                    <li><NavLink className="nav-item" to="/mylist">My List</NavLink></li>
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
