import React from "react";
// import Herobanner from "../elements/Herobanner/Herobanner";
import RowGrid from '../elements/RowGrid/RowGrid'
import { requests } from '../../config';



function Home(props) {



    return (
        <main>


            <RowGrid title="NETFLIX ORIGINALS" islargeImg getUrl={requests.fetchNetflixOriginals} />
            <RowGrid title="Top Movies" getUrl={requests.fetchTopMovies} />
            <RowGrid title="Documentaries" getUrl={requests.fetchDocumentaries} />
        </main>
    )
}

export default Home;
