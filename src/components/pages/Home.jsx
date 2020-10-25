import React from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import RowGrid from '../elements/RowGrid/RowGrid'
import { requests } from '../../config';
import { useHomeFetch } from '../hooks/useHomeFetch'



function Home(props) {
    const content = useHomeFetch(requests.fetchNetflixOriginals);

    const heroContent = content.movies[Math.floor(Math.random() * content.movies.length)];

    return (
        <main>
            <Herobanner item={heroContent} />
            <RowGrid title="NETFLIX ORIGINALS" islargeImg getUrl={requests.fetchNetflixOriginals} />
            <RowGrid title="Top Movies" getUrl={requests.fetchTopMovies} />
            <RowGrid title="Trending" getUrl={requests.fetchTrending} />
            <RowGrid title="Documentaries" getUrl={requests.fetchDocumentaries} />
            <RowGrid title="Action" getUrl={requests.fetchActionMovies} />
            <RowGrid title="Comedie" getUrl={requests.fetchComedieMovies} />
            <RowGrid title="Horror Movies" getUrl={requests.fetchHorrorMovies} />
            <RowGrid title="Romance" getUrl={requests.fetchRomanceMovies} />
        </main>
    )
}

export default Home;
