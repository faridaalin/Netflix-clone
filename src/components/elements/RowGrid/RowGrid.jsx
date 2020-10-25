import React, { useState } from 'react';
import SubHeader from '../Header/SubHeader'
import Herobanner from '../Herobanner/Herobanner'
import { StyledRowGrid } from './styles/StyledRowGrid.style'
import { IMAGE_BASE_URL } from "../../../config";
import noThumbImage from "../../../images/noimage.png";
import noHeroImage from "../../../images/noimagePoster.png";
import { useHomeFetch } from '../../hooks/useHomeFetch';
// import { movieKey } from '../../../config'


function RowGrid({ islargeImg, title, search, getUrl }) {
    const [activeModal, setActiveModal] = useState(null);
    const [close, setClose] = useState(true);
    const [movieDetails, setMovieDetails] = useState(null);
    const content = useHomeFetch(getUrl)
    const handleMovieDetail = (movie) => (e) => {
        setActiveModal(null)
        if (movie) {
            setMovieDetails(movie)
            setActiveModal(parseInt(movie.id))
            setClose(!close)

        }
    };
    return (

        <StyledRowGrid>
            <SubHeader>{title}</SubHeader>
            {content.loading ? <p>loading..</p>
                : content.errorMsg !== "" ? <p>content.errorMsg</p>
                    : content.movies ? (


                        <div className="row_thumbnails">
                            {content.movies.map((movie) => (

                                <img
                                    key={movie.id}
                                    className={`row__img ${islargeImg && "row_img--large"}`}
                                    onClick={handleMovieDetail(movie)}

                                    src={islargeImg && movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                        : islargeImg && !movie.poster_path ? noThumbImage
                                            : !islargeImg && movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
                                                : noHeroImage}

                                    alt={movie.name} />


                            ))}
                        </div>

                    )
                        : <p>Unable to get data</p>
            }
            {!movieDetails ? null : <Herobanner item={movieDetails} activeModal={activeModal} close={close} />}




        </StyledRowGrid>
    )
}

export default RowGrid

