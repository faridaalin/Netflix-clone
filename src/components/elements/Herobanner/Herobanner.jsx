import React from 'react'
import FontAwesome from 'react-fontawesome';
import noImageHero from "../../../images/noimagePoster.png";
import { IMAGE_BASE_URL } from "../../../config";
import { StyledHeroBanner } from './styles/StyledHeroBanner.style'


function Herobanner({ item }) {
    return (
        <>
            {item &&
                <StyledHeroBanner className="herobanner" imageUrl={item && item.backdrop_path ? `${IMAGE_BASE_URL}${item.backdrop_path}` : noImageHero}>
                    <div className="hero-img">
                        <div className="hero-content">
                            <h2>{item.name ? item.name : item.title}</h2>
                            <div className="buttons">
                                <button> <FontAwesome className="fas fa-play btn-icon" name="search" /> Play</button>
                                <button><FontAwesome className="fas fa-plus btn-icon" name="search" /> My list</button>
                            </div>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                </StyledHeroBanner>}
        </>
    )



}

export default Herobanner
