import React, { useState, useEffect } from 'react';
import SubHeader from '../Header/SubHeader'
import { StyledRowGrid } from './StyledRowGrid.style'
import { IMAGE_BASE_URL } from "../../../config";
import noThumbImage from "../../../images/noimage.png";
import noHeroImage from "../../../images/noimagePoster.png";
import { useHomeFetch } from '../../hooks/useHomeFetch'
import { movieKey } from '../../../config'


function RowGrid({ islargeImg, title, search, getUrl }) {
    const [storage] = JSON.parse(localStorage.getItem(movieKey)) || [];
    console.log("storage:", storage)
    const content = useHomeFetch(getUrl)
    // useEffect(() => {
    //     console.log("INSIDE USEEFFEKT storage:", storage)
    //     sessionStorage.setItem(movieKey, JSON.stringify(storage))
    // }, [content, storage])

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

        </StyledRowGrid>
    )
}

export default RowGrid

