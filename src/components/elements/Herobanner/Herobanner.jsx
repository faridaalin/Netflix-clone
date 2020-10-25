import React, { useState } from 'react'
import Button from '../Button/Button'
import noImageHero from "../../../images/noimagePoster.png";
import { IMAGE_BASE_URL } from "../../../config";
import { StyledHeroBanner } from './styles/StyledHeroBanner.style'



function Herobanner({ item, activeModal }) {


    return (
        <>
            {item &&
                <StyledHeroBanner className={`herobanner`} activeModal={activeModal === item.id} imageUrl={item && item.backdrop_path ? `${IMAGE_BASE_URL}${item.backdrop_path}` : noImageHero}>
                    <div className="hero-content">
                        <h2>{item.name ? item.name : item.title}</h2>
                        <div className="buttons">
                            <Button fontAwesoneClass={"fas fa-play btn-icon"} name="play" >Play</Button>
                            <Button fontAwesoneClass={"fas fa-plus btn-icon"} name="plus" >My list</Button>
                        </div>
                        <p>{item.overview}</p>
                    </div>
                    <div className="herobanner__fade" />
                </StyledHeroBanner>}
        </>
    )



}

export default Herobanner
