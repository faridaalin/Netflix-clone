import React, { useState } from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import RowGrid from '../elements/RowGrid/RowGrid'
import { requests } from '../../config';
import { useHomeFetch } from '../hooks/useHomeFetch'



function Home(props) {
    const content = useHomeFetch(requests.fetchNetflixOriginals);
    const [search, setSearch] = useState("");

    const heroContent = content.movies[Math.floor(Math.random() * content.movies.length)];

    return (
        <main>
            <Herobanner item={heroContent} />
            <RowGrid title="NETFLIX ORIGINALS" islargeImg search={search} getUrl={requests.fetchNetflixOriginals} />
            <RowGrid title="Top Movies" search={search} getUrl={requests.fetchTopMovies} />
            <RowGrid title="Trending" search={search} getUrl={requests.fetchTrending} />
            <RowGrid title="Documentaries" search={search} getUrl={requests.fetchDocumentaries} />
            <RowGrid title="Action" search={search} getUrl={requests.fetchActionMovies} />
            <RowGrid title="Comedie" search={search} getUrl={requests.fetchComedieMovies} />
            <RowGrid title="Horror Movies" search={search} getUrl={requests.fetchHorrorMovies} />
            <RowGrid title="Romance" search={search} getUrl={requests.fetchRomanceMovies} />
        </main>
    )
}

export default Home;
