import React, { useEffect } from "react";
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
    const dispatch = useDispatch();
    const discoverList = useSelector((state) => state.DiscoverList);
    const movieList = useSelector((state) => state.MovieList);
    const documentaries = useSelector((state) => state.DocumentariesList);

    useEffect(() => {
        dispatch(getDiscoverList())
        dispatch(getMovieList())
        dispatch(getDocumentaries())
    }, [dispatch])

    const showData = () => {
        if (discoverList.loading) {
            return <p>Loading..</p>
        };
        if (discoverList.errorMsg !== "") {
            return <p>Error..</p>
        }

        if (discoverList.data) {
            return (
                <main >
                    <Herobanner item={discoverList.data[0]} />
                    <SubHeader>Discover</SubHeader>
                    <CardGrid>
                        <div className="inner">
                            {discoverList.data.map((item) => (
                                <Thumbnail
                                    key={item.id}
                                    item={item.poster_path}
                                    title={item.name}
                                />
                            ))}
                        </div>
                    </CardGrid>
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
                    <SubHeader>Documentaries</SubHeader>
                    <CardGrid>
                        <div className="inner">
                            {documentaries.data.map((document) => (
                                < Thumbnail
                                    key={document.id}
                                    item={document.poster_path}
                                    title={document.name}
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

export default Home;
