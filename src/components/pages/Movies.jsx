import React, { useEffect } from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import Thumbnail from "../elements/Thumbnail/Thumbnail";
import CardGrid from '../styles/Grid/CardGrid.style'
import SubHeader from '../elements/Header/SubHeader'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getMovieList } from '../../actions/movieActions'


function Movies(props) {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.MovieList);

    useEffect(() => {
        dispatch(getMovieList())
    }, [dispatch])

    const showData = () => {
        if (movieList.loading) {
            return <p>Loading..</p>
        };
        if (movieList.error) {
            return <p>Eroor..</p>
        }

        if (movieList && movieList[0]) {
            return (
                <main >
                    <Herobanner discoverList={movieList[0]} />
                    <SubHeader>Movies</SubHeader>
                    <CardGrid>
                        <div className="inner">
                            {movieList.map((movie) => (
                                console.log(movie)
                                // <Thumbnail
                                //     key={movie.id}
                                //     discover={movie.poster_path}
                                //     title={movie.name}
                                // />
                            ))}
                        </div>

                    </CardGrid>

                </main>
            )
        }

        return <p>unable to get data</p>
    }



    return (
        <>
            {showData()}
            <p>{console.log(movieList && movieList[0])}</p>
        </>
    )
}

export default Movies;
