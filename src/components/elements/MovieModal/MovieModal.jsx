import React from 'react';
import Button from '../Button/Button';
import { IMAGE_BASE_URL } from "../../../config";
import noHeroImage from "../../../images/noimagePoster.png";
import { StyledModal } from './style/StyledModal.style'

function MovieModal({ showDetail, movieDetails }) {


    console.log(movieDetails)
    return !movieDetails ? null : (

        <StyledModal className="row_modal" showDetail={showDetail}
            img={movieDetails.backdrop_path ? `${IMAGE_BASE_URL}${movieDetails.backdrop_path}` : noHeroImage}>
            <h3>{movieDetails.title}</h3>
            <span>{movieDetails.popularity}</span> <span>{movieDetails.release_date}</span>
            <p>{movieDetails.overview}</p>
            <div className="buttons">
                <Button fontAwesoneClass={"fas fa-play btn-icon"} name="play" >Play</Button>
                <Button fontAwesoneClass={"fas fa-plus btn-icon"} name="plus" >My list</Button>
            </div>

        </StyledModal>

    )
}

export default MovieModal
