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


        if (movieList.data && movieList.data[0]) {

            return (
                <main >
                    <Herobanner item={movieList.data[5]} />
                    <SubHeader>Movies</SubHeader>
                    <CardGrid>
                        <div className="inner">
                            {movieList.data.map((movie) => (
                                < Thumbnail
                                    key={movie.id}
                                    item={movie.poster_path}
                                    title={movie.name}
                                />
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

        </>
    )
}

export default Movies;
