import React from 'react'
import FontAwesome from 'react-fontawesome';
import noImageHero from "../../../images/noimagePoster.png";
import { IMAGE_BASE_URL } from "../../../config";
import { StyledHeroBanner } from './styles/StyledHeroBanner.style'


function Herobanner({ discoverList }) {
    const imageUrl = discoverList && discoverList.backdrop_path;

    return (
        <>
            {discoverList &&
                <StyledHeroBanner imageUrl={imageUrl ? `${IMAGE_BASE_URL}original${imageUrl}` : noImageHero}>
                    <div className="hero-img">
                        {console.log(discoverList)}
                        <div className="hero-content">
                            {console.log(discoverList)}
                            <h2>{discoverList.name}</h2>
                            <div className="buttons">
                                <button> <FontAwesome className="fas fa-play btn-icon" name="search" /> Play</button>
                                <button><FontAwesome className="fas fa-plus btn-icon" name="search" /> My list</button>
                            </div>
                            <p>{discoverList.overview}</p>
                        </div>
                    </div>
                </StyledHeroBanner>}
        </>
    )



}

export default Herobanner
