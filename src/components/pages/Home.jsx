import React, { useEffect } from "react";
import Herobanner from "../elements/Herobanner/Herobanner";
import Thumbnail from "../elements/Thumbnail/Thumbnail";
import CardGrid from '../styles/Grid/CardGrid.style'
import SubHeader from '../elements/Header/SubHeader'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { getDiscoverList } from '../../actions/discoverActions'


function Home(props) {
    const dispatch = useDispatch();
    const discoverList = useSelector((state) => state.DiscoverList);

    useEffect(() => {
        dispatch(getDiscoverList())
    }, [dispatch])

    const showData = () => {
        if (discoverList.loading) {
            return <p>Loading..</p>
        };
        if (discoverList.errorMsg !== "") {
            return <p>Error..</p>
        }

        if (discoverList.data && discoverList.data[0]) {
            return (
                <main >
                    <Herobanner discoverList={discoverList.data[0]} />
                    <SubHeader>Discover</SubHeader>
                    <CardGrid>
                        <div className="inner">
                            {discoverList.data.map((discover) => (
                                <Thumbnail
                                    key={discover.id}
                                    discover={discover.poster_path}
                                    title={discover.name}
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
