import React from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import RowGrid from '../elements/RowGrid/RowGrid'
import { requests } from '../../config';
import { useHomeFetch } from '../hooks/useHomeFetch'



function Home(props) {
    const content = useHomeFetch(requests.fetchNetflixOriginals)

    const heroContent = content.movies[Math.floor(Math.random() * content.movies.length)];

    return (
        <main>
            <Herobanner item={heroContent} />


            <RowGrid title="NETFLIX ORIGINALS" islargeImg alreadyFetched getUrl={requests.fetchNetflixOriginals} />
            <RowGrid title="Top Movies" getUrl={requests.fetchTopMovies} />
            <RowGrid title="Documentaries" getUrl={requests.fetchDocumentaries} />
        </main>
    )
}

export default Home;
