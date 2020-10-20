import React, { useState, useEffect } from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import Thumbnail from "../elements/Thumbnail/Thumbnail";
import CardGrid from '../styles/Grid/CardGrid.style'
import SubHeader from '../elements/Header/SubHeader'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getDiscoverList } from '../../actions/discoverActions';
import { getMovieList } from '../../actions/movieActions';
import { getDocumentaries } from '../../actions/documentariesActions';


function Home(props) {
    const content = [];
    const dispatch = useDispatch();
    const discoverList = useSelector((state) => state.DiscoverList);
    const movieList = useSelector((state) => state.MovieList);
    const documentaries = useSelector((state) => state.DocumentariesList);


    useEffect(() => {
        dispatch(getDiscoverList())
        dispatch(getMovieList())
        dispatch(getDocumentaries())
    }, [dispatch])

    if (discoverList || movieList || documentaries) {
        content.push(discoverList, movieList, documentaries)
    }

    const renderHeroBanner = () => {
        if (discoverList.data[0]) {
            return <Herobanner item={discoverList.data[0]} />
        }
    }




    return (
        <main>
            {renderHeroBanner()}
            {content.map((item, index) =>
                <>
                    <SubHeader key={item.title}>{item.title}</SubHeader>
                    <CardGrid key={index}>
                        <div className="inner">
                            {item.data.map((movie) => (
                                < Thumbnail
                                    key={movie.id}
                                    item={movie.poster_path}
                                    title={movie.name}
                                />
                            ))}
                        </div>
                    </CardGrid>
                </>

            )}
        </main>
    )
}

export default Home;
